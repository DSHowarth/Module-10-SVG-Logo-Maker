# Module-10-SVG-Logo-Maker

## Description

This is a simple program that generates simple SVG logos for use in web applications. They're
not that complex. But they're free!

## Installation

Copy the contents of the repo, 
navigate to the root directory, 
then import inquirer using ```npm install```. 

## Usage

Navigate to the root directory, 
and run the program from the command line using ```node index.js```. 
Answer the prompts, and enjoy your new logo!

[Video demonstration of the running the program, generating a logo, and running svg validation tests](https://drive.google.com/file/d/1SbE25IzEOc_9OOUXU52cX8fxZrPpAmuO/view?usp=sharing)

## Technologies Used

- JavaScript
- Node.js
- Inquirer.js
- Jest

## Lessons Learned

- Inquirer has 'list' as an input type. It's way cleaner than trying to give the user a choice 
and then validate that text input.
- Multiple functions and constructors can be imported from the same file, but they also need to be exported from the same file as key/value pairs. Because everything is objects. 
- The dominant-baseline and text-anchor attributes are very helpful for getting text to sit where you want it on an SVG file without having to find weird and specific positioning values. 

## License

Governed under MIT License.