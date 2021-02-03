const template = require('./template');
const fs = require('fs');

function makeHTML(data) {
  const templateData = template(data);
  writeToFile(templateData);
}

function writeToFile(data) {
  console.log('Writing file now');
  fs.writeFileSync(`./index.html`, data);
}

module.exports = makeHTML;
