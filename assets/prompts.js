// probably won't need - was an experiment in understanding async limitations
const inquirer = require('inquirer');

function inquirerQ(questions) {
  return new Promise(function (resolve, reject) {
    inquirer
      .prompt(questions)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
module.exports = inquirerQ;
