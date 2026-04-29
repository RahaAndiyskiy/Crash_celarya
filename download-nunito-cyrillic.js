const https = require('https');
const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, 'public');
const cssUrl = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap&subset=cyrillic';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        res.resume();
        return;
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchBinary(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        res.resume();
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  try {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const css = await fetch(cssUrl);
    const urls = Array.from(css.matchAll(/url\((https:[^)]+)\)/g)).map(m => m[1]);
    if (urls.length !== 2) {
      throw new Error('Expected 2 font URLs, got ' + urls.length);
    }
    const files = ['Nunito-Cyrillic-Regular.ttf', 'Nunito-Cyrillic-Bold.ttf'];
    await Promise.all(urls.map((url, index) => fetchBinary(url, path.join(outDir, files[index]))));
    const localCss = `@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/Nunito-Cyrillic-Regular.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url('/Nunito-Cyrillic-Bold.ttf') format('truetype');\n}\n`;
    fs.writeFileSync(path.join(outDir, 'nunito.css'), localCss);
    console.log('Nunito Cyrillic downloaded and nunito.css updated');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
