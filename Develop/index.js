
// TODO: Include packages needed for this application
const inquirer = requrire('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Header',
        message: 'Create Project Header',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Create Project Description',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Create Instalation Instructions',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Create Usage Guide',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Create Contribution Guidelines',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Create Test Instructions',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writefile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file created successfully');
    });
}


// TODO: Create a function to initialize app
function init() {
    console.log('Inintializing the app...');
    inquirer
    .prompt(questions)
    .then ((answers) => {
        console.log(answers);
   
    writeToFile('./utils/README.md',generateMarkdown(answers));
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });
}
init();
