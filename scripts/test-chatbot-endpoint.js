// Native fetch is available in Node 18+
async function testChatbot() {
  console.log("🛠️ Testing Chatbot API Endpoint...");

  try {
    const response = await fetch('http://localhost:3000/api/chat/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Who are you and what do you sell?' }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log("\n✅ Response Received:");
    console.log(text);

    if (text.includes("Upton") || text.includes("Bespoke")) {
        console.log("\n✅ Persona Verified: 'Upton' or 'Bespoke' found in response.");
    } else {
        console.log("\n⚠️ Persona Check Failed: Standard branding not detected. Check prompt.");
    }

  } catch (error) {
    console.error("\n❌ Error testing endpoint:", error.message);
    if (error.cause) console.error("Cause:", error.cause);
    console.log("💡 Tip: Ensure local dev server is running on port 3000 (pnpm dev)");
  }
}

testChatbot();
