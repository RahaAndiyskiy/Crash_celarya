const https = require('https');
const fs = require('fs');
const path = require('path');
const cssUrl = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap&subset=cyrillic';
const outDir = path.join(__dirname, 'public');
let css = '';
https.get(cssUrl, (res) => {
  res.on('data', chunk => css += chunk.toString());
  res.on('end', () => {
    console.log(css);
    const urls = Array.from(css.matchAll(/url\((https:[^)]+)\)/g)).map(m => m[1]);
    console.log('URLs:', urls);
    const filePath = path.join(outDir, 'nunito-check.css');
    fs.writeFileSync(filePath, css);
    console.log('Wrote', filePath);
  });
}).on('error', err => { console.error(err); process.exit(1); });
