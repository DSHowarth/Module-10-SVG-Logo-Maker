const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./shapes.js');


//Extract shape/text html from object, write complete SVG to new file
const generateSVG = function(shapeObj){
    const logoHTML = shapeObj.render() + shapeObj.renderText();
    const svgTemplate = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${logoHTML}
    </svg>`

    fs.writeFile('./examples/logo.svg', svgTemplate, (err) => {
        err ? console.log('error') : console.log('Generated logo.svg')
    })
    
}

//Getting logo information from the user
const collectLogoInfo = function(){
    inquirer.prompt([{
        type: 'input',
        message: 'What text would you like for your logo? (3 characters or fewer)',
        name: 'text',
    },{
        type: 'input',
        message: 'And what color would you like that text to be?',
        name: 'textColor'
    },{
        type: 'list',
        message: 'Which Shape would you like your logo to be?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
    },{
        type: 'input',
        message: 'What color would you like your logo to be?',
        name: 'shapeColor'
    }])
    .then((answers) => {
        //Making sure the logo text is short enough to cleanly display
        if (answers.text.length > 3) {
            console.log('Generation failed: Logo text must be 3 characters or fewer.')
            return;
        }
        //Switch case to handle each shape selection. Look for alternative if shape options grow
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
                const newSquare = new shapes.Square(answers.shapeColor, answers.textColor, answers.text);
                generateSVG(newSquare);
                break;
        }
    })
}

//exporting for use by index.js
module.exports = {
    generateSVG: generateSVG,
    collectLogoInfo: collectLogoInfo
}