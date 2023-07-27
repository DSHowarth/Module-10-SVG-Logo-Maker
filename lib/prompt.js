const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./shapes.js');

const generateSVG = function(shapeObj){
    const logoHTML = shapeObj.render() + shapeObj.renderText();
    const svgTemplate = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${logoHTML}
    </svg>`

    writeFile('./examples/logo.svg', svgTemplate, (err) => {
        err ? console.log('error') : console.log('Generated logo.svg')
    })
    
}


const collectLogoInfo = function(){
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
                const newTriangle = new shapes.Triangle(answers.shapeColor, answers.textColor, answers.text);
                generateSVG(newTriangle);
                break;

            case 'Circle':
                const newCircle = new shapes.Circle(answers.shapeColor, answers.textColor, answers.text);
                generateSVG(newCircle);
                break;

            case 'Square':
                const newSqaure = new shapes.Square(answers.shapeColor, answers.textColor, answers.text);
                generateSVG(newSquare);
                break;
        }
    })
}

module.exports = {
    generateSVG: generateSVG,
    collectLogoInfo: collectLogoInfo
}