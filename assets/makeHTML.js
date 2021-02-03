const template = require('./template');
const fs = require('fs');
// attempt to use forEach to iterate over array and make a card for each before passing into template.
function makeHTML(data) {
  data.forEach((i) => {

  });

  // }
  // const templateData = template(data);
  // writeToFile(templateData);
}

function writeToFile(data) {
  console.log('Writing file now');
  fs.writeFileSync(`./index.html`, data);
}

module.exports = makeHTML;
