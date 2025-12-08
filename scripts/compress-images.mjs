#!/usr/bin/env node
import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../public/assets/generated');

// Images that are below this size are considered "already optimized"
const MIN_SIZE_TO_COMPRESS = 600 * 1024; // 600KB

async function compressImages() {
  try {
    const files = await fs.readdir(assetsDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    console.log(`Found ${imageFiles.length} image files to process...`);

    for (const file of imageFiles) {
      const filePath = join(assetsDir, file);
      const stat = await fs.stat(filePath);
      const fileSize = stat.size;
      const ext = extname(file).toLowerCase();

      // Skip if already small
      if (fileSize < MIN_SIZE_TO_COMPRESS) {
        console.log(`✓ ${file} (${(fileSize / 1024).toFixed(0)}KB) - already optimized`);
        continue;
      }

      try {
        const tempPath = filePath + '.tmp';
        let transformer = sharp(filePath);
        const metadata = await transformer.metadata();

        // Compression settings based on file type
        if (ext === '.jpg' || ext === '.jpeg') {
          transformer = transformer.jpeg({ quality: 80, progressive: true });
        } else if (ext === '.png') {
          transformer = transformer.png({ compressionLevel: 9, progressive: true });
        } else if (ext === '.webp') {
          transformer = transformer.webp({ quality: 80 });
        }

        await transformer.toFile(tempPath);
        await fs.rename(tempPath, filePath);

        const newStat = await fs.stat(filePath);
        const newSize = newStat.size;
        const savings = ((fileSize - newSize) / fileSize * 100).toFixed(1);

        console.log(
          `✓ ${file}`,
          `${(fileSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`,
          `(${savings}% smaller)`
        );
      } catch (err) {
        console.error(`✗ Error processing ${file}:`, err.message);
      }
    }

    console.log('\nImage compression complete!');
  } catch (err) {
    console.error('Error reading assets directory:', err);
    process.exit(1);
  }
}

compressImages();
