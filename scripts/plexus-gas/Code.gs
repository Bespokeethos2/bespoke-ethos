// BESPOKE ETHOS AUTOMATED OUTREACH - FULL OAUTH
// Generated: 2025-12-09
// ONE-CLICK SETUP: Just run setup() and authorize

// =====================================================
// CONFIGURATION
// =====================================================

const CONFIG = {
  SENDER_NAME: "Upton",
  SENDER_EMAIL: "contact@bespokeethos.com",
  COPPER_API_TOKEN: "09a8b3004b81cdad8a4c384671424ff3",
  COPPER_USER_EMAIL: "contact@bespokeethos.com",
  COPPER_API_BASE: "https://api.copper.com/developer_api/v1"
};

const SEND_CONFIG = {
  EMAILS_PER_DAY: 60,
  DELAY_BETWEEN_SENDS_MS: 60000, // 1 minute between each send
  BATCH_1_DATE: "2025-12-09",    // Today
  BATCH_2_DATE: "2025-12-10",    // Tomorrow
  SEND_HOUR: 11,                 // 11 AM
  SEND_MINUTE: 0
};

// =====================================================
// MAIN SETUP - RUN THIS ONCE
// =====================================================

/**
 * ONE-CLICK SETUP
 * Run this function to:
 * 1. Verify Gmail drafts exist
 * 2. Create logging spreadsheet
 * 3. Test Copper API
 * 4. Schedule 60 emails for TODAY at 11 AM
 * 5. Schedule 60 emails for TOMORROW at 11 AM
 */
function setup() {
  Logger.log('🚀 PLEXUS OUTREACH - AUTOMATED SETUP\n');
  Logger.log('='.repeat(50));

  // Step 1: Check drafts
  Logger.log('\n📧 STEP 1: Checking Gmail Drafts...');
  const drafts = GmailApp.getDrafts();
  Logger.log(`   Found ${drafts.length} drafts in outbox`);

  if (drafts.length < 60) {
    Logger.log(`   ⚠️ WARNING: Only ${drafts.length} drafts. Need 120 for 2 days.`);
  } else if (drafts.length < 120) {
    Logger.log(`   ⚠️ Have ${drafts.length} drafts. Enough for today, may need more for tomorrow.`);
  } else {
    Logger.log(`   ✅ Perfect! ${drafts.length} drafts ready for 2 days.`);
  }

  // Preview first 5
  Logger.log('\n   Preview of first 5 drafts:');
  for (let i = 0; i < Math.min(5, drafts.length); i++) {
    const msg = drafts[i].getMessage();
    Logger.log(`   ${i+1}. ${msg.getTo()} - "${msg.getSubject().substring(0, 40)}..."`);
  }

  // Step 2: Create logging sheet
  Logger.log('\n📊 STEP 2: Setting up Logging Sheet...');
  const sheet = getOrCreateLogSheet();
  Logger.log(`   ✅ Log sheet ready: ${sheet.getParent().getUrl()}`);

  // Step 3: Test Copper API
  Logger.log('\n🔗 STEP 3: Testing Copper CRM API...');
  const copperOk = testCopperAPI();
  if (copperOk) {
    Logger.log('   ✅ Copper API connected successfully');
  } else {
    Logger.log('   ⚠️ Copper API test failed (emails will still send, just no CRM logging)');
  }

  // Step 4: Clear old triggers and create new ones
  Logger.log('\n⏰ STEP 4: Scheduling Email Batches...');

  // Clear existing
  const existingTriggers = ScriptApp.getProjectTriggers();
  existingTriggers.forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log(`   Cleared ${existingTriggers.length} old triggers`);

  // Schedule TODAY at 11 AM
  const todayDate = new Date();
  todayDate.setHours(SEND_CONFIG.SEND_HOUR, SEND_CONFIG.SEND_MINUTE, 0, 0);

  // If it's already past 11 AM today, schedule for 1 minute from now
  const now = new Date();
  if (now > todayDate) {
    todayDate.setTime(now.getTime() + 60000); // 1 minute from now
    Logger.log(`   ⚠️ Past 11 AM - scheduling Batch 1 for ${todayDate.toLocaleTimeString()}`);
  }

  ScriptApp.newTrigger('sendBatch1')
    .timeBased()
    .at(todayDate)
    .create();
  Logger.log(`   📅 Batch 1: ${todayDate.toLocaleString()} (60 emails, 1/min)`);

  // Schedule TOMORROW at 11 AM
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  tomorrowDate.setHours(SEND_CONFIG.SEND_HOUR, SEND_CONFIG.SEND_MINUTE, 0, 0);

  ScriptApp.newTrigger('sendBatch2')
    .timeBased()
    .at(tomorrowDate)
    .create();
  Logger.log(`   📅 Batch 2: ${tomorrowDate.toLocaleString()} (60 emails, 1/min)`);

  // Summary
  Logger.log('\n' + '='.repeat(50));
  Logger.log('✅ SETUP COMPLETE!\n');
  Logger.log('📬 Schedule:');
  Logger.log(`   • TODAY: 60 emails starting at ${todayDate.toLocaleTimeString()}`);
  Logger.log(`   • TOMORROW: 60 emails starting at 11:00 AM`);
  Logger.log(`   • Rate: 1 email per minute (60 min total per batch)`);
  Logger.log('\n🛑 To cancel: Run clearAllTriggers()');
  Logger.log('👀 To monitor: Check the Send Log spreadsheet');

  return {
    draftsFound: drafts.length,
    todayScheduled: todayDate,
    tomorrowScheduled: tomorrowDate
  };
}

// =====================================================
// BATCH SEND FUNCTIONS
// =====================================================

function sendBatch1() {
  Logger.log('🚀 BATCH 1 STARTING - ' + new Date().toLocaleString());
  sendDraftsNow();
}

function sendBatch2() {
  Logger.log('🚀 BATCH 2 STARTING - ' + new Date().toLocaleString());
  sendDraftsNow();
}

function sendDraftsNow() {
  const sheet = getOrCreateLogSheet();
  const drafts = GmailApp.getDrafts();

  Logger.log(`📬 Found ${drafts.length} drafts`);

  if (drafts.length === 0) {
    Logger.log('⚠️ No drafts to send!');
    return;
  }

  const emailsToSend = Math.min(SEND_CONFIG.EMAILS_PER_DAY, drafts.length);
  let sentCount = 0;
  let failedCount = 0;
  let skippedCount = 0;

  Logger.log(`📤 Sending ${emailsToSend} emails (1 per minute)...\n`);

  for (let i = 0; i < emailsToSend; i++) {
    const draft = drafts[i];

    try {
      const message = draft.getMessage();
      const to = message.getTo();
      const subject = message.getSubject();

      // Check duplicate
      if (isAlreadySent(sheet, to)) {
        Logger.log(`⏭️ Skip: ${to} (already sent)`);
        skippedCount++;
        continue;
      }

      // Send it
      draft.send();
      sentCount++;

      // Log to sheet
      logSend(sheet, to, subject, 'SUCCESS');

      // Update Copper CRM (non-blocking)
      try {
        updateCopperForEmail(to, subject);
      } catch (e) {
        // Don't fail the send if Copper fails
      }

      Logger.log(`✅ ${sentCount}/${emailsToSend} Sent: ${to}`);

      // Wait 1 minute before next send
      if (i < emailsToSend - 1) {
        Utilities.sleep(SEND_CONFIG.DELAY_BETWEEN_SENDS_MS);
      }

    } catch (error) {
      failedCount++;
      Logger.log(`❌ Failed: ${error.message}`);
      logSend(sheet, 'unknown', 'unknown', 'FAILED: ' + error.message);
    }
  }

  // Final summary
  Logger.log('\n' + '='.repeat(50));
  Logger.log('🎉 BATCH COMPLETE');
  Logger.log(`✅ Sent: ${sentCount}`);
  Logger.log(`⏭️ Skipped: ${skippedCount}`);
  Logger.log(`❌ Failed: ${failedCount}`);
  Logger.log(`📬 Remaining drafts: ${drafts.length - sentCount - skippedCount}`);
}

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getOrCreateLogSheet() {
  const ssName = 'Plexus Outreach Log';
  let ss;

  // Try to find existing
  const files = DriveApp.getFilesByName(ssName);
  if (files.hasNext()) {
    ss = SpreadsheetApp.open(files.next());
  } else {
    ss = SpreadsheetApp.create(ssName);
  }

  let sheet = ss.getSheetByName('Send Log');
  if (!sheet) {
    sheet = ss.insertSheet('Send Log');
    sheet.appendRow(['Timestamp', 'Email', 'Subject', 'Status', 'Copper Updated']);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function isAlreadySent(sheet, email) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === email && data[i][3] === 'SUCCESS') {
      return true;
    }
  }
  return false;
}

function logSend(sheet, email, subject, status) {
  sheet.appendRow([
    new Date(),
    email,
    subject,
    status,
    ''
  ]);
}

function testCopperAPI() {
  try {
    const response = UrlFetchApp.fetch(CONFIG.COPPER_API_BASE + '/account', {
      method: 'GET',
      headers: {
        'X-PW-AccessToken': CONFIG.COPPER_API_TOKEN,
        'X-PW-Application': 'developer_api',
        'X-PW-UserEmail': CONFIG.COPPER_USER_EMAIL,
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    });
    return response.getResponseCode() === 200;
  } catch (e) {
    return false;
  }
}

function updateCopperForEmail(email, subject) {
  try {
    // Search for person
    const searchResp = UrlFetchApp.fetch(CONFIG.COPPER_API_BASE + '/people/search', {
      method: 'POST',
      headers: {
        'X-PW-AccessToken': CONFIG.COPPER_API_TOKEN,
        'X-PW-Application': 'developer_api',
        'X-PW-UserEmail': CONFIG.COPPER_USER_EMAIL,
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({ emails: [email] }),
      muteHttpExceptions: true
    });

    const people = JSON.parse(searchResp.getContentText());

    if (people && people.length > 0) {
      // Log activity
      UrlFetchApp.fetch(CONFIG.COPPER_API_BASE + '/activities', {
        method: 'POST',
        headers: {
          'X-PW-AccessToken': CONFIG.COPPER_API_TOKEN,
          'X-PW-Application': 'developer_api',
          'X-PW-UserEmail': CONFIG.COPPER_USER_EMAIL,
          'Content-Type': 'application/json'
        },
        payload: JSON.stringify({
          parent: { type: 'person', id: people[0].id },
          type: { category: 'user', id: 0 },
          details: `Sent Plexus outreach: "${subject}"`
        }),
        muteHttpExceptions: true
      });
    }
  } catch (e) {
    // Silent fail - don't break email sending
  }
}

// =====================================================
// CONTROL FUNCTIONS
// =====================================================

/**
 * Emergency stop - cancels all scheduled sends
 */
function clearAllTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log(`🛑 Cleared ${triggers.length} triggers - all sends cancelled`);
}

/**
 * View what's scheduled
 */
function viewTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  Logger.log(`📋 ${triggers.length} scheduled triggers:\n`);

  triggers.forEach((t, i) => {
    Logger.log(`${i+1}. ${t.getHandlerFunction()} - ${t.getEventType()}`);
  });

  if (triggers.length === 0) {
    Logger.log('No triggers scheduled. Run setup() to schedule sends.');
  }
}

/**
 * Manual send - use if you want to send immediately
 */
function sendNow() {
  Logger.log('🚀 MANUAL SEND STARTING');
  sendDraftsNow();
}

/**
 * Preview drafts without sending
 */
function previewDrafts() {
  const drafts = GmailApp.getDrafts();
  Logger.log(`📬 ${drafts.length} drafts found:\n`);

  const count = Math.min(20, drafts.length);
  for (let i = 0; i < count; i++) {
    const m = drafts[i].getMessage();
    Logger.log(`${i+1}. TO: ${m.getTo()}`);
    Logger.log(`   SUBJ: ${m.getSubject()}`);
    Logger.log('');
  }

  if (drafts.length > 20) {
    Logger.log(`... and ${drafts.length - 20} more`);
  }
}

/**
 * Test send to yourself
 */
function testSend() {
  GmailApp.sendEmail(
    CONFIG.SENDER_EMAIL,
    'Test - Plexus Outreach Script',
    'This is a test. If you see this, the script is working!',
    { name: CONFIG.SENDER_NAME }
  );
  Logger.log('✅ Test email sent to ' + CONFIG.SENDER_EMAIL);
}
