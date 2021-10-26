// const Manager = require("./Lib/Manager");
// const Intern = require("./Lib/Intern");
// const Engineer = require("./Lib/Engineer");
const renderedTeam = (team) => {
    const renderedManager = (manager) => {
        return `        
        <div class="card" style="width: 18rem;">
        <div class="card-body" style="background-color: red;">
          <h3 class="card-title">${manager.getName()}</h3>
          <h4 class="card-text">${manager.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
      `
    };

    // repeat for intern 
    const renderedIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body" style="background-color: red;">
          <h3 class="card-title">${intern.getName()}</h3>
          <h4 class="card-text">${intern.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">Number: ${intern.getSchool()}</li>
        </ul>
        `
    };

    // repeat for engineer
    const renderedEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body" style="background-color: red;">
          <h3 class="card-title">${engineer.getName()}</h3>
          <h4 class="card-text">${engineer.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">Number: ${engineer.getGithub()}</li>
        </ul>
      </div>
      `
    };


const emptyHTMLArray = [];

emptyHTMLArray.push(team.filter((employee) => employee.getRole() === "Manager")
.map((manager) => renderedManager(manager))
);

emptyHTMLArray.push(team.filter((employee) => employee.getRole() === "Engineer")
.map((engineer) => renderedEngineer(engineer))
);


emptyHTMLArray.push(team.filter((employee) => employee.getRole() === "Intern")
.map((intern) => renderedIntern(intern))
);

return emptyHTMLArray.join("");

};

 module.exports = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
      <div class="jumbotron">
        <h1 class="display-4">My Team</h1>
      </div>
        <div class= employeeContainer>
        ${renderedTeam(team)}        
        </div>
    </body>
    </html>
    `

    
} 