const fs = require('fs');
const path = require('path');

const root = process.cwd();
const outputDir = path.join(root, 'out');

for (const file of ['CNAME', '.nojekyll']) {
  const src = path.join(root, file);
  const dest = path.join(outputDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}
