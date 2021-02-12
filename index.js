const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const q = require('./assets/questions');
const inquirerQ = require('./assets/prompts');
const fs = require('fs');

//Prompts user for information about new manager and passes arrayed info to answerResults
function init() {
  const answerArr = [];
  inquirer
    .prompt(q.managerQuestions)
    .then((data) => {
      answerArr.push(data);
      if (data.choice === 'Finish Building Team') {
        makeHTML(answerArr);
      } else {
        answerResults(answerArr);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

//Builds the rest of the team based on user choices, passes arrayed info to makeHTML which returns an HTML template
async function answerResults(answerArr) {
  let shunt = await inquirerQ(q.selectionShunt);
  if (shunt.choice === 'Add an Engineer') {
    let answerEngineer = await inquirerQ(q.engineerQuestions);
    answerArr.push(answerEngineer);
    answerResults(answerArr);
  } else if (shunt.choice === 'Add an Intern') {
    let answerIntern = await inquirerQ(q.internQuestions);
    answerArr.push(answerIntern);
    answerResults(answerArr);
  } else if (shunt.choice === 'Finish Building Team') {
    const templateData = await makeHTML(answerArr);
    writeToFile(templateData);
  }
}

//Writes the information from our HTML template to a file
function writeToFile(data) {
  console.log('Writing file now');
  fs.writeFileSync(`./index.html`, data);
}

init();
