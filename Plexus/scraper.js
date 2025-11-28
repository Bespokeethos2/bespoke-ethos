// Plexus Member Directory Scraper
// Run this in your browser console while on the Plexus member directory page

(async function () {
    console.log('🚀 Starting Plexus Member Scraper...');

    const members = [];
    let processedCount = 0;

    // Get all member links from the current page
    // Try multiple selectors to find member links
    let memberLinks = [];

    // First, try to find links in the results area
    const resultLinks = Array.from(document.querySelectorAll('a'))
        .filter(link => {
            const href = link.href || '';
            const text = link.textContent.trim();
            // Look for links that go to member detail pages OR company names in results
            return (href.includes('/mic/member') ||
                href.includes('member/view') ||
                (link.closest('.mn-member-info, .member-card, .search-result') && text.length > 0));
        })
        .map(link => ({
            name: link.textContent.trim(),
            url: link.href
        }));

    memberLinks = resultLinks;

    // If we didn't find any, try a broader search
    if (memberLinks.length === 0) {
        console.log('No member links found with standard selectors, trying broader search...');
        memberLinks = Array.from(document.querySelectorAll('a[href*="member"]'))
            .filter(link => !link.href.includes('search') && link.textContent.trim().length > 0)
            .map(link => ({
                name: link.textContent.trim(),
                url: link.href
            }));
    }

    // Remove duplicates
    const uniqueMembers = [...new Map(memberLinks.map(m => [m.url, m])).values()];

    console.log(`Found ${uniqueMembers.length} unique members to process`);

    // Function to extract data from a member detail page
    async function extractMemberData(memberUrl) {
        try {
            const response = await fetch(memberUrl);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract company name
            const companyName = doc.querySelector('h1, .company-name, .member-name')?.textContent.trim() || '';

            // Extract address
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

            // Extract phone numbers
            const phones = Array.from(doc.querySelectorAll('a[href^="tel:"], .phone'))
                .map(el => el.textContent.trim())
                .filter(p => p);

            // Extract emails
            const emails = Array.from(doc.querySelectorAll('a[href^="mailto:"]'))
                .map(el => el.href.replace('mailto:', '').trim())
                .filter(e => e);

            // Extract website
            const websiteLink = doc.querySelector('a[href*="http"]:not([href*="chambermaster"]):not([href*="mailto"])');
            const website = websiteLink?.href || '';

            // Extract description/about
            const aboutSection = doc.querySelector('.about, .description, [class*="about"]');
            const description = aboutSection?.textContent.trim().substring(0, 500) || '';

            // Extract representatives/contacts
            const reps = Array.from(doc.querySelectorAll('.representative, .contact, [class*="rep"]'))
                .map(el => el.textContent.trim())
                .filter(r => r);

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

    // Process members in batches
    const batchSize = 5;
    for (let i = 0; i < uniqueMembers.length; i += batchSize) {
        const batch = uniqueMembers.slice(i, i + batchSize);
        console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(uniqueMembers.length / batchSize)}...`);

        const batchPromises = batch.map(member => extractMemberData(member.url));
        const batchResults = await Promise.all(batchPromises);

        batchResults.forEach(result => {
            if (result) {
                members.push(result);
                processedCount++;
            }
        });

        console.log(`Processed ${processedCount}/${uniqueMembers.length} members`);

        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Convert to CSV
    function convertToCSV(data) {
        if (data.length === 0) return '';

        const headers = Object.keys(data[0]);
        const csvRows = [];

        // Add header row
        csvRows.push(headers.map(h => `"${h}"`).join(','));

        // Add data rows
        for (const row of data) {
            const values = headers.map(header => {
                const value = row[header] || '';
                // Escape quotes and wrap in quotes
                return `"${String(value).replace(/"/g, '""')}"`;
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }

    const csv = convertToCSV(members);

    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `plexus_members_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`✅ Complete! Extracted ${members.length} members`);
    console.log('CSV file downloaded');

    return members;
})();
