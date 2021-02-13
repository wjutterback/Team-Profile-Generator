const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const q = require('./assets/questions');
const inquirerQ = require('./assets/prompts');
const fs = require('fs');

//Prompts user for information about new manager and passes arrayed info to answerResults
async function init() {
  const answerArr = [];
  try {
    let answerManager = await inquirerQ(q.managerQuestions);
    answerArr.push(answerManager);
    answerResults(answerArr);
  } catch (error) {
    console.error(error);
  }
}

//Builds the rest of the team based on user choices, passes arrayed info to makeHTML which returns an HTML template
async function answerResults(answerArr) {
  try {
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
  } catch (error) {
    console.error(error);
  }
}

//Writes the information from our HTML template to a file
function writeToFile(data) {
  console.log('Writing file now');
  fs.writeFileSync(`./index.html`, data);
}

init();
