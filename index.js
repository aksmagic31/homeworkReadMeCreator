// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const chalk = require('chalk');

// TODO: Create an array of questions for user input

const questions [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project',

    }
]

function createReadme(answers){
    fs.writeFileSync('./README.md'),`
# ${answer.title}
## ${answer.description}
### $
    `

}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
