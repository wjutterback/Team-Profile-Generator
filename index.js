const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is your team manager's name?",
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is your employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
  },
];

inquirer.prompt(questions).then((data) => {
  console.log(data);
});
