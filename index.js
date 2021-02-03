const inquirer = require('inquirer');
const makeHTML = require('./assets/makeHTML');
const q = require('./assets/questions');
// const inquirerQ = require('./assets/prompts');
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
  let shuntChoice = await inquirer.prompt(q.selectionShunt);
  if (shuntChoice.choice === 'Add an Engineer') {
    let answerEngineer = await inquirer.prompt(q.engineerQuestions);
    answerArr.push(answerEngineer);
    answerResults();
  } else if (shuntChoice.choice === 'Add an Intern') {

  }

  // .then((data) => {
  //   if (data.choice === 'Add an Engineer') {
  //     let answerEngineer = inquirerQ(q.engineerQuestions);
  //     answerArr.push(answerEngineer);
  //   } else if (data.choice === 'Add an Intern') {
  //     let answerIntern = inquirerQ(q.internQuestions);
  //     answerArr.push(answerIntern);
  //     console.log(answerArr);
  //   } else if (data.choice === 'Finish Building Team') {
  //     console.log(answerArr);
  //   }
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

// -------------- async example
// async function answerResults(data) {
//   const license = await renderLicenseSection(data);
//   const badge = license.spdx_id.replace('-', '%20').replace('-', '--');
//   const licenseBody = license.body;
//   const link = license.html_url;
//   const tempData = template(licenseBody, data, badge, link);

//   writeToFile(data.filename, tempData);
// }

// .then((data) => {
//   console.log(data);
//   if (data.choice === 'Add an Engineer') {
//     return inquirer.prompt(q.engineerQuestions).then((data) => {
//       console.log('2nd Eng', data);
//     });
//   } else if (data.choice === 'Add an Intern') {
//     return inquirer.prompt(q.internQuestions);
//   } else if (data.choice === 'Finish Building Team') {
//     console.log('2nd finish', data);
//   }
// })
// .catch((error) => {
//   console.log(error);
// });
