
//Links to modules
const inquirer = require("inquirer");
const fs = require("fs");

// Asks the user questions
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  }
];

// starts the program on load
function init() {
    // promt questions then take response and put it into readme file
  inquirer.prompt(questions).then(function (userResponse) {
      //sets filoe data to user responses
    const data = writeToFile(userResponse);

    fs.writeFile("README.md", data, function () {

        //tell console when it is done
      console.log("success");
    });
  });
}

// Writes the readme file
function writeToFile(userObj) {
  return ` ### **${userObj.username}**
  
  ## Username 
  ${userObj.description}
  ## Table of contents
  `;
}

// function call to initialize program
init();