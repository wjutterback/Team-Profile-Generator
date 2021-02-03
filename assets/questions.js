const managerQuestions = [
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
    message: "What is the team manager's e-mail address?",
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: "What is the team manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: 'engineerID',
    message: "What is the engineer's employee ID?",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "What is the engineer's e-mail address?",
  },
  {
    type: 'input',
    name: 'engineerGitHub',
    message: "What is the engineer's GitHub username?",
  },
];
const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: 'internID',
    message: "What is the intern's employee ID?",
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What is the intern's e-mail address?",
  },
  {
    type: 'input',
    name: 'internGitHub',
    message: 'Which school does the intern attend?',
  },
];
const selectionShunt = [
  {
    type: 'list',
    name: 'choice',
    message: 'Please select a choice:',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team'],
  },
];
exports.managerQuestions = managerQuestions;
exports.engineerQuestions = engineerQuestions;
exports.internQuestions = internQuestions;
exports.selectionShunt = selectionShunt;
