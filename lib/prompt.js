const inquirer = require('inquirer');
const shapes = require('./shapes.js')

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
.then((answers) => {
    switch(answers.shape){
        case 'Triangle':
            const newLogo = new shapes.Triangle(answers.shapeColor, answers.textColor, answers.text);
            generateSVG(newLogo);
            break;

        case 'Circle':
            const newLogo = new shapes.Circle(answers.shapeColor, answers.textColor, answers.text);
            generateSVG(newLogo);
            break;

        case 'Square':
            const newLogo = new shapes.Square(answers.shapeColor, answers.textColor, answers.text);
            generateSVG(newLogo);
            break;
    }
})