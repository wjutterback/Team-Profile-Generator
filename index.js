const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'managerID',
    message: "What is the team manager's employee ID?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's address?",
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: "What is the team manager's office number?",
  },
];

inquirer
  .prompt(questions)
  .then((data) => {
    makeHTML(data);
  })
  .catch((error) => {
    console.log(error);
  });
