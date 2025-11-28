document.addEventListener('DOMContentLoaded', () => {
    const scrapeBtn = document.getElementById('scrapeBtn');
    const copyBtn = document.getElementById('copyBtn');
    const statusDiv = document.getElementById('status');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');

    let scrapedData = '';

    scrapeBtn.addEventListener('click', async () => {
        // Reset UI
        statusDiv.style.display = 'block';
        statusDiv.className = 'info';
        statusDiv.textContent = 'Initializing...';
        progressBar.style.display = 'block';
        progressFill.style.width = '5%';
        scrapeBtn.disabled = true;
        copyBtn.style.display = 'none';

        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            // Inject the scraper function
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: scrapePlexusMembers
            }, (results) => {
                if (chrome.runtime.lastError) {
                    showError(chrome.runtime.lastError.message);
                    return;
                }

                // We can't easily get real-time progress back from executeScript without messaging
                // So we'll simulate progress for better UX while it runs
                let progress = 5;
                const interval = setInterval(() => {
                    progress += Math.random() * 5;
                    if (progress > 90) progress = 90;
                    progressFill.style.width = `${progress}%`;
                }, 500);

                // The script returns the CSV string when done
                const result = results[0].result;
                clearInterval(interval);

                if (result && result.error) {
                    showError(result.error);
                } else if (result) {
                    scrapedData = result;
                    progressFill.style.width = '100%';
                    showSuccess(`Done! Found ${result.split('\n').length - 1} members.`);
                    copyBtn.style.display = 'block';

                    // Auto-download attempt
                    try {
                        const blob = new Blob([result], { type: 'text/csv;charset=utf-8;' });
                        const url = URL.createObjectURL(blob);
                        chrome.downloads.download({
                            url: url,
                            filename: `plexus_members_${new Date().toISOString().split('T')[0]}.csv`
                        });
                        statusDiv.textContent += ' Downloading file...';
                    } catch (e) {
                        console.error('Download failed', e);
                        statusDiv.textContent += ' Download blocked, please use Copy button.';
                    }
                } else {
                    showError('No data returned. Make sure you are on the member directory page.');
                }
            });
        } catch (error) {
            showError(error.message);
        }
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(scrapedData).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            copyBtn.style.background = '#059669';
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '#10b981';
            }, 2000);
        }).catch(err => {
            showError('Failed to copy: ' + err);
        });
    });

    function showError(msg) {
        statusDiv.className = 'error';
        statusDiv.textContent = 'Error: ' + msg;
        scrapeBtn.disabled = false;
        progressBar.style.display = 'none';
    }

    function showSuccess(msg) {
        statusDiv.className = 'success';
        statusDiv.textContent = msg;
        scrapeBtn.disabled = false;
    }
});

// The scraping logic to inject
function scrapePlexusMembers() {
    return (async function () {
        try {
            console.log('🚀 Starting Plexus Member Scraper...');

            // 1. Find all member links
            let memberLinks = [];

            // Try multiple selectors
            const resultLinks = Array.from(document.querySelectorAll('a'))
                .filter(link => {
                    const href = link.href || '';
                    const text = link.textContent.trim();
                    return (href.includes('/mic/member') ||
                        href.includes('member/view') ||
                        (link.closest('.mn-member-info, .member-card, .search-result') && text.length > 0));
                })
                .map(link => ({
                    name: link.textContent.trim(),
                    url: link.href
                }));

            memberLinks = resultLinks;

            // Fallback search
            if (memberLinks.length === 0) {
                memberLinks = Array.from(document.querySelectorAll('a[href*="member"]'))
                    .filter(link => !link.href.includes('search') && link.textContent.trim().length > 0)
                    .map(link => ({
                        name: link.textContent.trim(),
                        url: link.href
                    }));
            }

            const uniqueMembers = [...new Map(memberLinks.map(m => [m.url, m])).values()];
            console.log(`Found ${uniqueMembers.length} unique members`);

            if (uniqueMembers.length === 0) {
                return { error: "No members found on this page. Please navigate to the directory list." };
            }

            // 2. Extract data helper
            async function extractMemberData(memberUrl) {
                try {
                    const response = await fetch(memberUrl);
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    const companyName = doc.querySelector('h1, .company-name, .member-name')?.textContent.trim() || '';

                    // Address
                    const addressElements = doc.querySelectorAll('.address, [itemprop="address"]');
                    let address = '', city = '', state = '', zip = '';
                    if (addressElements.length > 0) {
                        const addressText = addressElements[0].textContent.trim();
                        const addressParts = addressText.split(',').map(p => p.trim());
                        address = addressParts[0] || '';
                        city = addressParts[1] || '';
                        const stateZip = addressParts[2]?.split(' ') || [];
                        state = stateZip[0] || '';
                        zip = stateZip[1] || '';
                    }

                    const phones = Array.from(doc.querySelectorAll('a[href^="tel:"], .phone')).map(el => el.textContent.trim()).filter(p => p);
                    const emails = Array.from(doc.querySelectorAll('a[href^="mailto:"]')).map(el => el.href.replace('mailto:', '').trim()).filter(e => e);
                    const websiteLink = doc.querySelector('a[href*="http"]:not([href*="chambermaster"]):not([href*="mailto"])');
                    const website = websiteLink?.href || '';
                    const aboutSection = doc.querySelector('.about, .description, [class*="about"]');
                    const description = aboutSection?.textContent.trim().substring(0, 500) || '';
                    const reps = Array.from(doc.querySelectorAll('.representative, .contact, [class*="rep"]')).map(el => el.textContent.trim()).filter(r => r);

                    return {
                        'Company Name': companyName,
                        'Address': address,
                        'City': city,
                        'State': state,
                        'Zip': zip,
                        'Phone': phones.join('; '),
                        'Email': emails.join('; '),
                        'Website': website,
                        'Description': description,
                        'Representatives': reps.join('; ')
                    };
                } catch (error) {
                    console.error(`Error processing ${memberUrl}:`, error);
                    return null;
                }
            }

            // 3. Process in batches
            const members = [];
            const batchSize = 5;

            for (let i = 0; i < uniqueMembers.length; i += batchSize) {
                const batch = uniqueMembers.slice(i, i + batchSize);
                const batchPromises = batch.map(member => extractMemberData(member.url));
                const batchResults = await Promise.all(batchPromises);

                batchResults.forEach(result => {
                    if (result) members.push(result);
                });

                // Small delay
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            // 4. Convert to CSV
            if (members.length === 0) return "";

            const headers = Object.keys(members[0]);
            const csvRows = [];
            csvRows.push(headers.map(h => `"${h}"`).join(','));

            for (const row of members) {
                const values = headers.map(header => {
                    const value = row[header] || '';
                    return `"${String(value).replace(/"/g, '""')}"`;
                });
                csvRows.push(values.join(','));
            }

            return csvRows.join('\n');

        } catch (err) {
            return { error: err.toString() };
        }
    })();
}
