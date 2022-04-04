const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// const { create } = require('domain');

const teamArr = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter a name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the manager's ID number",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter ID number!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter an email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: answer => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an office number!")
            return false;
          }
        }
      },

    ])
    .then((answer) => {
      let manager = new Manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
      teamArr.push(manager);
      createTeam();
    })
}

function addEngineer() {
  // https://www.npmjs.com/package/inquirer#installation
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter engineer's name",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter engineer's name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter engineer's ID number",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please provide the engineer's ID number!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter engineer's email address",
        validate: answer => {
          // make sure output shows email
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter an email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter engineer's github username",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter engineer's github username!")
            return false;
          }
        }
      },

    ])
    .then(answer => {
      let engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
      teamArr.push(engineer);
      createTeam();
    })
};

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter intern's name",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter intern's name!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter intern's ID number",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please provide the intern's ID number!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter intern's email address",
        validate: answer => {
          // make sure output shows email
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter an email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter intern's school",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            console.log("Please enter intern's role!")
            return false;
          }
        }
      },
    ])
    .then(answer => {
      let intern = new Intern(answer.name, answer.id, answer.email, "Intern", answer.school);
      teamArr.push(intern);
      createTeam();
    })
}

const writeToFile = data => {
  const generatedHTML = generateHTML(data);
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generated.html', generatedHTML, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Team profile generated!'
      });
    });
  });
};

const generateHTML = () => {
  const results = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet" />
  </head>
  
  <body>
    <header>
    <div class="container col-12 text-center bg-danger text-white">
      <h1 class="py-5">My Team</h1>
    </div>
      <div class="container flex-row justify-space-between align-center py-3">
      </div>
    </header>
    <main class="container">
      <div class="row justify-content-lg-center">
          ${teamArrToHTML().join('')}
      </div>
    </main>
  </body>
  </html>
  `;

  return results;
}

function teamArrToHTML() {
  const cardArr = teamArr.map(o => {
    switch (o.role) {
      case 'Manager':
        return `
              <div class="col-md-4 col-lg-3 m-3 p-0">
                  <div class='card employee-card'>
                      <div class='manager-card shadow bg-body rounded bg-light'>
                          <div class='card-header bg-primary text-light'>
                              <h2 class="card-title">${o.getName()}</h2> 
                              <h3><p class="fas fa-mug-hot"></p> Manager</h3>
                          </div>
                          <ul class="list-group list-group-flush list-unstyled my-4 mx-3">
                              <li class="list-group-item border">Id: ${o.getId()}</li>
                              <li class="list-group-item border">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                              <li class="list-group-item border">Office number: ${o.getOfficeNumber()}</li>
                          </ul>
                      </div>
                  </div> 
              </div>
              `

      case 'Engineer':
        return `
              <div class="col-md-4 col-lg-3 m-3 p-0">
                  <div class='card employee-card'>
                      <div class='engineer-card shadow bg-body rounded bg-light'>
                          <div class='card-header bg-primary text-light'>
                              <h2 class="card-title">${o.getName()}</h2> 
                              <h3><p class="fas fa-glasses"></p> Engineer</h3>
                          </div>
                          <ul class="list-group list-group-flush list-unstyled my-4 mx-3">
                              <li class="list-group-item border">Id: ${o.getId()}</li>
                              <li class="list-group-item border">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                              <li class="list-group-item border">Github: <a href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}</a></li>
                          </ul>
                      </div>
                  </div>
              </div> 
              `

      case 'Intern':
        return `
              <div class="col-md-4 col-lg-3 m-3 p-0">
                  <div class='card employee-card'>
                      <div class='intern-card shadow bg-body rounded bg-light'>
                          <div class='card-header bg-primary text-light'>
                              <h2 class="card-title">${o.getName()}</h2> 
                              <h3><p class="fas fa-user-graduate"></p> Intern</h3>
                          </div>
                          <ul class="list-group list-group-flush list-unstyled my-4 mx-3">
                              <li class="list-group-item border">Id: ${o.getId()}</li>
                              <li class="list-group-item border">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                              <li class="list-group-item border">School: ${o.getSchool()}</li>
                          </ul>
                      </div>
                  </div>
              </div>
              `
      default:
        console.log('cardArr finished?')
        return results
    }
  });
  return cardArr;
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "Manager",
          "None"
        ]
      }
    ]).then(answer => {
      switch (answer.role) {
        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        case "Manager":
          addManager();
          break;

        default:
          console.log(teamArr);
          writeToFile(teamArr);
      };
    });
}

createTeam();

// {
//   type: 'input',
//   name: '',
//   message: "",
//   validate: answer => {
//     if (answer !== "") {
//       return true;
//     } else {
//       console.log()
//       return false;
//     }
//   }
// },