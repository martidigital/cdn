// build-index.js
const { readdirSync, writeFileSync } = require('fs');

const files = readdirSync('./modules')
  .filter(f => f.endsWith('.html'))
  .map(f => f.replace('.html', ''));

writeFileSync('./modules/index.json', JSON.stringify(files));