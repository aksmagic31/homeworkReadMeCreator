// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const chalk = require('chalk');

// TODO: Create an array of questions for user input

const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your project name?',
		
	},
	{
		type: 'input',
        name: 'description',
		message: 'Describe your application?',
		
		
	},
	{
		type: 'input',
        name: 'preview',
		message: 'provide a link for the preview?',
		
	},
	{
		type: 'input',
        name: 'install',
		message: 'How to install your application?',
		
	},
	{
		type: 'input',
        name: 'usage',
		message: 'What is your application used for?',
		
	},
	{
		type: 'checkbox',
        name: 'license',
		message: 'What kind of license is used?',
		
		choices: ['BSD', 'Apache', 'Boost'],
	},
	{
		type: 'input',
        name: 'contribute',
		message: 'What is the guideline to contributing?',
		
	
	},
	{
		type: 'input',
        name: 'test',
		message: 'Do you want to provide any test info?',
		
		
	},
	{
		type: 'input',
        name: 'github',
		message: 'What is your Github Username?',
		
		
	},
	{
		type: 'input',
        name: 'email',
		message: 'Please enter in your email',
	
	},
];
// function to create the read me using writefilesync

function createReadme(answers){
    fs.writeFileSync(
		'./readme.md',
		`# ${answers.name}

## Table of Contents
- [Description](#description)
- [Application Preview](#application-preview)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Description
- ${answers.description}

## Application Preview
 src="${answers.preview}"

## Installation
- ${answers.install}

## Usage
- ${answers.usage}

## Contribution
- ${answers.contribute}

## Test Instructions
- ${answers.test}

## Questions
Please contact me with the methods below:
- Github Username: ${answers.github}
- Github Link: https://github.com/${answers.github} 
- Email: ${answers.email}

## License

- Licensed under the: ${answers.license} 
`
	);
};


// using the inquirer to ask for questions

inquirer.prompt(questions)
.then((answers) => {
    createReadme(answers);
    console.log(chalk.green(`successfully create README.md`))
})
.catch((error) => {
    console.error('something went wrong!', error);

}
)

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
