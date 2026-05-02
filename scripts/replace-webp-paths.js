const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const res = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(res) : [res];
});
const exts = ['.js', '.jsx', '.ts', '.tsx'];
const files = walk(root).filter((file) => exts.includes(path.extname(file)) || file === path.join(root, 'public', 'sw.js'));
const regex = /(['"])(\/((?!optimized\/)[^'"\\]*?\.webp))/g;
let updated = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const newContent = content.replace(regex, (_, quote, url) => `${quote}/optimized/${url.slice(1)}`);
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`updated ${path.relative(root, file)}`);
    updated += 1;
  }
}
console.log(`filesUpdated ${updated}`);
