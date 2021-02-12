const buildTemplate = (manager, intern, engineer) => {
  const employeesArr = [];

  manager.forEach((manager) => {
    data = `<div class="col-lg-12">
    <div class="card d-flex mx-auto" style="margin-top: 30px; width: 18rem; box-shadow: 5px 5px 3px grey">
          <div class="card-body bg-primary text-center">
            <h5 class="card-title" style="font-size: 2rem; color: white">${manager.name}</h5>
            <p class="card-text" style="font-size: 1.25rem; color: white"><i class="fas fa-tasks"></i> ${manager.role}</p>
          </div>
          <div class ="card-body" style="background-color: rgb(231, 229, 229)">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Office: ${manager.officeNumber}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            </ul>
          </div>
          </div>
        </div>`;
    employeesArr.push(data);
  });

  engineer.forEach((engineer) => {
    data = `<div
    class="card d-flex"
    style="
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      width: 18rem;
      box-shadow: 5px 5px 3px grey;
    "
  >
    <div class="card-body bg-primary text-center">
      <h5 class="card-title" style="font-size: 2rem; color: white">
        ${engineer.name}
      </h5>
      <p class="card-text" style="font-size: 1.25rem; color: white">
        <i class="fas fa-briefcase"></i> ${engineer.role}
      </p>
    </div>
    <div class="card-body" style="background-color: rgb(231, 229, 229)">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">Profile</a></li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      </ul>
    </div>
  </div>`;
    employeesArr.push(data);
  });

  intern.forEach((intern) => {
    data = `<div
    class="card d-flex"
    style="
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
      width: 18rem;
      box-shadow: 5px 5px 3px grey;
    "
  >
    <div class="card-body bg-primary text-center">
      <h5 class="card-title" style="font-size: 2rem; color: white">
        ${intern.name}
      </h5>
      <p class="card-text" style="font-size: 1.25rem; color: white">
        <i class="fas fa-glasses"></i> ${intern.role}
      </p>
    </div>
    <div class="card-body" style="background-color: rgb(231, 229, 229)">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">School: ${intern.school}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      </ul>
    </div>
  </div>`;
    employeesArr.push(data);
  });

  const cards = employeesArr.join('');
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>
  </head>
  <body>
  <div class="row">
  ${cards}
  </div>
  </body>
  </html>
  `;
};

module.exports = buildTemplate;
