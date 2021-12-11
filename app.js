const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");
const { resolve } = require("path/posix");

const finalData = [];
console.log("line 6 initial", finalData);

const managerQuestions = [
  `What is the manager's name?`,
  `What is the manager's employee Id?`,
  `What is the manager's email?`,
  `What is the manager's office number?`,
  `Would you like to add an engineer, an intern, or finish building your team?`,
];

const engineerQuestions = [
  `What is the engineers name?`,
  `What is the engineers Id?`,
  `What is the engineer's email?`,
  `What is the engineer's github username?`,
  `Would you like to add an engineer, an intern, or finish building your team?`,
];

const internQuestions = [
  `What is the intern's name?`,
  `What is the intern's Id?`,
  `What is the intern's email?`,
  `Where does the intern attend university?`,
  `Would you like to add an engineer, an intern, or finish building your team?`,
];

function engineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: engineerQuestions[0],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the engineer's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: engineerQuestions[1],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the engineer Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: engineerQuestions[2],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: engineerQuestions[3],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the engineer's Github username!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "engineerNext",
        message: engineerQuestions[4],
        choices: ["engineer", "intern", "finish building your team"],
        default: [2],
      },
    ])
    .then((engineerAnswer) => {
      finalData.push(engineerAnswer);
      console.log("this is final Data from engineer", finalData);
      if (engineerAnswer.engineerNext === "engineer") {
        engineer();
      } else if (engineerAnswer.engineerNext === "intern") {
        intern();
      } else {
        console.log("engineer else block", finalData);
        employee();
      }
    });
}

function intern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: internQuestions[0],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your intern's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: internQuestions[1],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your intern's Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: internQuestions[2],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: internQuestions[3],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the university the intern attends!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "internNext",
        message: internQuestions[4],
        choices: ["engineer", "intern", "finish building your team"],
        default: [2],
      },
    ])
    .then((internAnswer) => {
      finalData.push(internAnswer);
      console.log("this is final Data from Intern", finalData);
      if (internAnswer.internNext === "engineer") {
        engineer();
      } else if (internAnswer.internNext === "intern") {
        intern();
      } else {
        console.log("intern else block", finalData);
        employee();
      }
    });
}

function manager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: managerQuestions[0],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the Team Manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: managerQuestions[1],
        validate: (name) => {
          if (name) {
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
        message: managerQuestions[2],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your manager email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: managerQuestions[3],
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "doNext",
        message: managerQuestions[4],
        choices: ["engineer", "intern", "finish building your team"],
        default: [2],
      },
    ])
    .then((managerData) => {
      finalData.push(managerData);
      console.log("this is final Data from manager", finalData);
      if (managerData.doNext === "engineer") {
        engineer();
      } else if (managerData.doNext === "intern") {
        intern();
      } else {
        console.log("manager else block", finalData);
        employee();
      }
    });
}

function employee() {
  return new Promise((resolve, reject) => {
    if (finalData.length > 0) {
      resolve(finalData);
      console.log("Success");
      const returnedHtml = generatePage(finalData);
      writeToFile("index", returnedHtml);
    } else {
      reject("Something went wrong!");
    }
  });
}


const writeToFile = function(fileName, data) {
    fs.writeFile(`./${fileName}.html`, data, err => {
        if (err) {
        throw err;
        } 
        console.log('file created!')
    })
}

manager();
