// fix-quotes.mjs — Pre-build script to fix escaped quotes in SEO_CONFIG lookups
// Run with: node fix-quotes.mjs
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function walkDir(dir) {
    const files = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
          const full = join(dir, entry.name);
          if (entry.isDirectory()) files.push(...walkDir(full));
          else if (entry.name.endsWith('.tsx')) files.push(full);
    }
    return files;
}

let fixed = 0;
for (const file of walkDir('src')) {
    const content = readFileSync(file, 'utf8');
    if (content.includes("SEO_CONFIG[\\'")) {
          const updated = content.replaceAll("\\'", "'");
          writeFileSync(file, updated);
          fixed++;
          console.log('Fixed:', file);
    }
}
console.log(`Done. Fixed ${fixed} files.`);
