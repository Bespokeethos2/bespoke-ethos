import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("Missing OPENAI_API_KEY in .env.local");
  process.exit(1);
}

const OUT_DIR = path.join("public", "assets", "generated");

/**
 * Call OpenAI Images API (DALL·E) and save a single square image.
 */
async function generateImage({ prompt, fileName }) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
      n: 1,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Image generation failed:", res.status, res.statusText, errorText);
    throw new Error("OpenAI image generation failed");
  }

  const json = await res.json();
  const first = json?.data?.[0];

  let buffer;
  if (first?.b64_json) {
    buffer = Buffer.from(first.b64_json, "base64");
  } else if (first?.url) {
    const imageRes = await fetch(first.url);
    if (!imageRes.ok) {
      console.error("Failed to download generated image:", imageRes.status, imageRes.statusText);
      throw new Error("Failed to download generated image");
    }
    const arrayBuffer = await imageRes.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } else {
    console.error("No image data returned from OpenAI:", json);
    throw new Error("No image data returned");
  }

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const outPath = path.join(OUT_DIR, fileName);
  fs.writeFileSync(outPath, buffer);
  console.log("Wrote", outPath);
}

async function main() {
  await generateImage({
    fileName: "flowstack-operator-dashboard-square.png",
    prompt:
      "A square, minimalistic dashboard snapshot for a small business workflow automation app. "
      + "View is a clean desktop screen with a simple card-based dashboard: 3–4 rounded tiles "
      + "showing abstract charts (bars, lines, circles) and status pills, with one tile softly highlighted. "
      + "Colors: off-white background, soft gray UI, accents in warm orange and deep teal. "
      + "No text, no numbers, no logos—only abstract shapes and charts. "
      + "Soft shadows, slight vignette, high-end product photography feel, centered composition.",
  });

  await generateImage({
    fileName: "flowstack-builder-square.png",
    prompt:
      "A square close-up of a workflow builder canvas on a laptop screen, showing connected rounded rectangles "
      + "and arrows representing an automation flow. Clean, modern UI: white canvas, soft gray nodes, connectors "
      + "in warm orange and teal. A human hand or cursor is hovering over one step as if adjusting it. "
      + "No text, no labels, no brand marks—only abstract nodes and arrows. "
      + "Slight angle (3/4 perspective), soft depth of field, warm natural light.",
  });

  await generateImage({
    fileName: "flowstack-exec-square.png",
    prompt:
      "A square photo of a small business founder sitting at a desk in a warm, slightly rustic office, reviewing "
      + "a simple analytics dashboard on a tablet. The screen shows big blocks of color and simple charts "
      + "(no readable text or numbers). Lighting: soft, warm, inviting. Style: premium brand photography, "
      + "shallow depth of field, focus on the founder’s hands and the tablet, face softly visible but not the main emphasis. "
      + "Colors echo warm orange accents and deep teal in the UI on the screen.",
  });
}

// Node 18+ has global fetch; guard just in case.
if (typeof fetch === "undefined") {
  console.error("Global fetch is not available in this Node version.");
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
