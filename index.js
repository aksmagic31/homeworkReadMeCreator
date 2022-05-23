// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const chalk = require('chalk');

// TODO: Create an array of questions for user input

const questions = [
	{
		type: 'input',
		name: 'project',
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
		message: 'Do you want to put anything in the preview?',
		
	},
	{
		type: 'input',
        name: 'install',
		message: 'How do I install your application?',
		
	},
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		
	},
	{
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'Apache', 'GPL'],
	},
	{
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
	
	},
	{
		type: 'input',
		message: 'How do I test your application?',
		name: 'test',
		
	},
	{
		type: 'input',
		message: 'What is your Github Username?',
		name: 'github',
		
	},
	{
		type: 'input',
		message: 'Please enter in your email',
		name: 'email',
	
	},
];


function createReadme(answers){
    fs.writeFileSync('./README.md'),`
# ${answers.title}
## ${answers.description}
### ${answers.}
    `

}

inquirer.prompt(questions)
.then((answers) => {
    createReadme(answers.title);
    console.log(chalk.green(`successfully create README.md`))
})
.catch((error) => {
    console.error('something went wrong!', error);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
