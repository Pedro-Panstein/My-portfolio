const fs = require('fs');
const path = require('path');

const pt = JSON.parse(fs.readFileSync(path.join(__dirname, 'pt.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));

const translations = {
  ...pt,
  ...en,
};

const content = `export const translations = ${JSON.stringify(translations, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, 'translation.tsx'), content, 'utf8');

console.log('✅ translation.tsx gerado corretamente!');
