const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(process.cwd(), 'public');
const quality = 90;
const effort = 6;
const minSizeBytes = 1024 * 10; // skip tiny files

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const res = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(res) : [res];
  });
}

async function compress(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== '.webp') return;
  const original = fs.statSync(file).size;
  if (original < minSizeBytes) {
    console.log(`skip small ${path.basename(file)} (${(original / 1024).toFixed(1)} KB)`);
    return;
  }

  const tempFile = `${file}.tmp`;
  await sharp(file)
    .webp({ quality, effort })
    .toFile(tempFile);

  const optimized = fs.statSync(tempFile).size;
  if (optimized < original) {
    try {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
      fs.renameSync(tempFile, file);
      console.log(`optimized ${path.relative(root, file)}: ${(original / 1024).toFixed(1)} KB → ${(optimized / 1024).toFixed(1)} KB`);
    } catch (replaceError) {
      try {
        fs.copyFileSync(tempFile, file);
        fs.unlinkSync(tempFile);
        console.log(`optimized ${path.relative(root, file)} via copy: ${(original / 1024).toFixed(1)} KB → ${(optimized / 1024).toFixed(1)} KB`);
      } catch (copyError) {
        fs.unlinkSync(tempFile);
        console.error(`skip locked ${path.relative(root, file)}: ${replaceError.message}`);
      }
    }
  } else {
    fs.unlinkSync(tempFile);
    console.log(`kept ${path.relative(root, file)}: no improvement (${(original / 1024).toFixed(1)} KB)`);
  }
}

async function run() {
  const files = walk(root).filter((file) => file.toLowerCase().endsWith('.webp'));
  for (const file of files) {
    try {
      await compress(file);
    } catch (error) {
      console.error(`error processing ${file}:`, error.message);
    }
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
