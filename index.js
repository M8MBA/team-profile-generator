const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { create } = require('domain');

const teamArr = [];

function addEngineer() {
  inquirer.prompt([
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
          console.log ("Please enter an email address!")
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
          console.log ("Please enter engineer's github username!")
          return false;
        }
      }
    },

  ]).then(answer => {
      let engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
      teamArr.push(engineer);
      createTeam();
  })
};

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