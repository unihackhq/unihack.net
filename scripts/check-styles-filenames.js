#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const roots = [path.join('src', 'app'), path.join('src', 'components')];
const exclude = [path.join('src', 'app', 'globals.css')];
const expected = 'styles.module.css';

async function walk(dir, cb) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full, cb);
    } else {
      await cb(full);
    }
  }
}

(async function main(){
  const mismatches = [];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    await walk(root, async (file) => {
      if (path.extname(file) !== '.css') return;
      if (exclude.includes(file)) return;
      const base = path.basename(file);
      if (base !== expected) {
        // allow existing styles.module.css files (okay), otherwise record
        mismatches.push(file);
      }
    });
  }

  if (mismatches.length) {
    console.error('\n✖ CSS filename convention violation: found files that are not named "' + expected + '"\n');
    mismatches.forEach(f => console.error(' - ' + f));
    console.error('\nPlease rename these files to "' + expected + '" (one per component/page folder).');
    process.exitCode = 1;
  } else {
    console.log('✔ All CSS files under src/app and src/components follow the "' + expected + '" convention (excluding src/app/globals.css).');
  }
})();
