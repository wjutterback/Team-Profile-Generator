const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const q = require('./assets/questions');
const inquirerQ = require('./assets/prompts');
const answerArr = [];
//.then chain doesn't seem to be capable of doing this as a return
inquirer
  .prompt(q.managerQuestions)
  .then((data) => {
    answerArr.push(data);
    if (data.choice === 'Finish Building Team') {
      makeHTML(answerArr);
    } else {
      answerResults();
    }
    // return data;
  })
  .catch((error) => {
    console.log(error);
  });

async function answerResults() {
  let shunt = await inquirer.prompt(q.selectionShunt);
  if (shunt.choice === 'Add an Engineer') {
    let answerEngineer = await inquirerQ(q.engineerQuestions);
    answerArr.push(answerEngineer);
    answerResults();
  } else if (shunt.choice === 'Add an Intern') {
    let answerIntern = await inquirerQ(q.internQuestions);
    answerArr.push(answerIntern);
    answerResults();
  } else if (shunt.choice === 'Finish Building Team') {
    console.log(answerArr);
  }

