const inquirer = require('inquirer');

inquirer.prompt([{
    type: 'list',
    message: 'Which Shape would you like your logo to be?',
    name: 'shape',
    choices: ['Triangle', 'Circle', 'Square'],
},{
    type: 'input',
    message: 'What color would you like your logo to be?',
    name: 'shapeColor'
},{
    type: 'input',
    message: 'What text would you like for your logo?',
    name: 'text'
},{
    type: 'input',
    message: 'And what color would you like that text to be?',
    name: 'textColor'
}])