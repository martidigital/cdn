// build-index.js (run before deploying)
import { readdirSync, writeFileSync } from 'fs';

const files = readdirSync('./modules')
  .filter(f => f.endsWith('.html')) // or .md, whatever you use
  .map(f => f.replace('.html', ''));

writeFileSync('./modules/index.json', JSON.stringify(files));