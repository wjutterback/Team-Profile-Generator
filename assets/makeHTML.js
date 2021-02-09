const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./template');

function makeHTML(answerArr) {
  const managers = [];
  const engineers = [];
  const interns = [];
  answerArr.forEach((i) => {
    if (i.hasOwnProperty('office') === true) {
      const manager = new Manager(i.name, i.id, i.email, i.office);
      managers.push(manager);
    } else if (i.hasOwnProperty('github') === true) {
      const engineer = new Engineer(i.name, i.id, i.email, i.github);
      engineers.push(engineer);
    } else if (i.hasOwnProperty('school') === true) {
      const intern = new Intern(i.name, i.id, i.email, i.school);
      interns.push(intern);
    }
  });
  const templateData = template(managers, interns, engineers);
  return templateData;
}

module.exports = makeHTML;
