const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const q = require('./assets/questions');
const inquirerQ = require('./assets/prompts');

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

async function answerResults(answerArr) {
  let shunt = await inquirerQ(q.selectionShunt);
  if (shunt.choice === 'Add an Engineer') {
    let answerEngineer = await inquirerQ(q.engineerQuestions);
    answerArr.push(answerEngineer);
    answerResults();
  } else if (shunt.choice === 'Add an Intern') {
    let answerIntern = await inquirerQ(q.internQuestions);
    answerArr.push(answerIntern);
    answerResults();
  } else if (shunt.choice === 'Finish Building Team') {
    makeHTML(answerArr);
  }
}

init();
