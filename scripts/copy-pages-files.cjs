const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');

for (const file of ['CNAME', '.nojekyll']) {
  const src = path.join(root, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}
