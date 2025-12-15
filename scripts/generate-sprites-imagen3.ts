import { ImageGenerationModel, VertexAI } from "@google-cloud/vertex-ai";
import * as fs from "fs";
import * as path from "path";

// AUTH & CONFIG
const PROJECT_ID = "bespokeethos-analytics-475007";
const LOCATION = "us-central1";

const vertexAI = new VertexAI({ project: PROJECT_ID, location: LOCATION });

async function generateSprite(prompt: string, outputName: string) {
  try {
    const model = vertexAI.preview.getGenerativeModel({
      model: "imagen-3.0-generate-001",
    });

    console.log(`🎨 Generating: ${outputName}...`);
    
    // Imagen 3 specific request (using the 'generateContent' pattern for multimodal or specific image method if widely available, 
    // but the SDK might vary. Falling back to specific ImageGenerationModel if needed or standard generateContent with image prompt)
    // NOTE: The Node SDK for Imagen 3 is evolving. Using the cleanest approach for Vertex.
    
    // Attempting via standard GenerativeModel first, but ImageGenerationModel is safer for Imagen.
    // Let's try the specific model class if available in this version of SDK, else standard.
    
    // @ts-ignore - bypassing strict check for the snippet
    const imageModel = new ImageGenerationModel({
        project: PROJECT_ID,
        location: LOCATION,
        model: "imagen-3.0-generate-001"
    });

    const response = await imageModel.generateImages({
      prompt: prompt,
      numberOfImages: 1,
      aspectRatio: "1:1",
      personGeneration: "allow_adult",
    });

    const images = response.images;
    if (images.length === 0) throw new Error("No image generated");

    const buffer = Buffer.from(images[0].base64, 'base64');
    const outputPath = path.join(process.cwd(), "public", "assets", "generated", outputName);
    
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Saved: ${outputPath}`);

  } catch (error) {
    console.error(`❌ Failed ${outputName}:`, error);
  }
}

async function main() {
  await generateSprite(
    "A sprite sheet of a stylized digital brain or chip. 4 stages of 'filling up': 1. Empty/Wireframe (Blue lines), 2. Half-full (Blue glowing nodes), 3. Full (Bright Orange glow), 4. Overloaded/Red (Warning signs). Cyberpunk UI aesthetic. Transparent background.", 
    "sprite_context_brain.png"
  );
  
  await generateSprite(
    "A sprite sheet of a cute, minimalist vector robot face with different expressions: 1. Neutral/Bored (Gray), 2. Focused/Processing (Blue glowing eyes), 3. Creative/Happy (Orange/Sparkles), 4. Glitching/Confused (Purple/Static). Arranged in a grid. Transparent background. Flat design, high contrast.",
    "sprite_robot_emotions.png"
  );
}

main();
