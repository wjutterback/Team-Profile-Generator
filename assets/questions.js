const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's e-mail address?",
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the team manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's e-mail address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
  },
];
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the intern's employee ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's e-mail address?",
  },
  {
    type: 'input',
    name: 'school',
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
