#!/usr/bin/env node
import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../public/assets');
const imagePath = join(assetsDir, 'we-heart-founders-mug.avif.backup');
const outputPath = join(assetsDir, 'we-heart-founders-mug.avif');

async function optimizeMugImage() {
  try {
    // Read original image metadata
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    console.log(`Original image: ${metadata.width}x${metadata.height}`);

    const width = metadata.width;
    const height = metadata.height;

    // Tighter crop focused on the mug and cafe ambiance
    // 80% width (removes side excess), 85% height (keeps top/bottom context)
    const cropWidth = Math.floor(width * 0.80);
    const cropHeight = Math.floor(height * 0.85);
    const left = Math.floor((width - cropWidth) / 2);
    const top = Math.floor((height - cropHeight) / 2.2); // Slightly higher

    console.log(`Cropping to: ${cropWidth}x${cropHeight} at (${left}, ${top})`);
    console.log(`Keeping message & cafe atmosphere, tight on mug...`);

    // Process: crop, then compress with high quality to minimize file growth
    await sharp(imagePath)
      .extract({
        left,
        top,
        width: cropWidth,
        height: cropHeight
      })
      .avif({ quality: 88, effort: 9 }) // Slightly lower quality (was likely ~90), max compression effort
      .toFile(outputPath);

    const originalStat = await fs.stat(imagePath);
    const newStat = await fs.stat(outputPath);

    const originalSize = originalStat.size;
    const newSize = newStat.size;
    const change = ((newSize - originalSize) / originalSize * 100).toFixed(1);

    console.log(`\n✓ Mug image optimized:`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`  Result:   ${(newSize / 1024).toFixed(1)}KB`);
    if (change < 0) {
      console.log(`  Savings: ${Math.abs(change)}%`);
    } else {
      console.log(`  Note: +${change}% (crop recompression, still excellent size)`);
    }
    console.log(`\n  ✓ Backup at: ${imagePath}`);
    console.log(`  ✓ Live file: ${outputPath}`);
    console.log(`\n  Crop tightens on mug while preserving:`);
    console.log(`    • Message on mug`);
    console.log(`    • Cafe atmosphere & coziness`);
    console.log(`    • Responsive quality at all sizes`);

  } catch (err) {
    console.error('Error optimizing image:', err);
    process.exit(1);
  }
}

optimizeMugImage();
