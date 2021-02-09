const buildTemplate = (manager, intern, engineer) => {
  const employeesArr = [];

  manager.forEach((manager) => {
    data = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class ="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Office: ${manager.officeNumber}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
          </ul>
        </div>
      </div>`;
    employeesArr.push(data);
  });

  engineer.forEach((engineer) => {
    data = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class ="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">GitHub: ${engineer.github}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
      </ul>
    </div>
  </div>`;
    employeesArr.push(data);
  });

  intern.forEach((intern) => {
    data = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class ="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">School: ${intern.school}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
      </ul>
    </div>
  </div>`;
    employeesArr.push(data);
  });

  const cards = employeesArr.join();
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
  </head>
  <body>
  ${cards}
  </body>
  </html>
  `;
};

module.exports = buildTemplate;

// `
