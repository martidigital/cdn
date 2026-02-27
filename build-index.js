// build-index.js
const { readdirSync, writeFileSync } = require('fs');

const files = readdirSync('./docs/modules')
  .filter(f => f.endsWith('.html'))
  .map(f => f.replace('.html', ''));

writeFileSync('./docs/modules/index.json', JSON.stringify(files));