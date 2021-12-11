const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown, writeFile } = require("./utils/generateMarkdown");

const questions = [
  `What is the team manager's name?`,
  `What is the manager's employee Id?`,
  `What is the manager's email?`,
  `What is the manager's office number`,
  `Would you like to add an engineer, an intern, or finish building your team`,
];

function init() {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: questions[0],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Team Manager's name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "ManagerId",
      message: questions[1],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your manager Id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message: questions[2],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your manager email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "screenshot",
      message: questions[3],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's office number!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: questions[4],
      choices: ["engineer", "intern", "finish building your team"],
      default: [2],
    },








    
  ]);
}
