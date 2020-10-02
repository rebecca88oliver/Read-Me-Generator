
//Links to modules using require method
const inquirer = require("inquirer");
const fs = require("fs");

// Asks the user questions

    const questions = [
        {
          type: "input",
          message: "What is your GitHub username?",
          name: "username",
        },
        {
          type: "input",
          message: "Email address?",
          name: "email",
        },
        {
          type: "input",
          message: "Enter your project title.",
          name: "title",
        },
        {
          type: "input",
          message: "Write a description of your project.",
          name: "description",
        },
        {
          type: "input",
          message: "What are your installation instructions?",
          name: "installation",
        },
        {
          type: "input",
          message: "What is the intended usage of your project?",
          name: "usage",
        },
        {
          type: "input",
          message: "Please enter your contribution guidelines.",
          name: "contributing",
        },
        {
          type: "input",
          message: "Please enter instructions for your project.",
          name: "test",
        },
        {
          type: "list",
          message: "Choose a license:",
          name: "license",
          choices: ["MIT", "Apache", "GPL", "IBM", "ISC", "Mozilla", "Unlicensed"],
        }
];

// starts the program on load
function init() {
    // promt questions then take response and put it into readme file
  inquirer.prompt(questions).then(function (userResponse) {
      //sets file data to user responses
    const data = writeToFile(userResponse);

    fs.writeFile("README.md", data, function () {

        //tell console when it is done
      console.log("success!");
    });
  });
}

// Creates the readme file
function writeToFile(userObj) {
    return ` ### **${userObj.title}**
    
    ## Description 
    ${userObj.description}
    ## Table of contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Test](#Test)
    * [GitHub Info](#Questions) 
    
    ## Installation
    ${userObj.installation}
    
    ## Usage
    ${userObj.usage}
    ## License
    ![License](https://img.shields.io/badge/LICENSE-${userObj.license}-GREEN)
    
    ## Contributors
    ${userObj.contributing}
    
    ## Test
    ${userObj.test}
    
    ## Questions
    For questions contact ${userObj.email}.
    GitHub URL: https://api.github.com/users/${userObj.username}
    `;
  }
  

// function call to initialize program
init();