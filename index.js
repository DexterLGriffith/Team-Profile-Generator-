const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//prompt questions for TEAM BUILDING 
inquirer, prompt([

    // prompt questions to ask for each person... on the command line. 
    {
        message: "Whats your position?",
        name: "position",
        type: "input",
    },
    {
        message: "What is your name?",
        name: "name",
        type: "input",











])
//get it to write the index.html and CSS file.  
.then((data) => {
    fs.writeFile(
        if () {

        }
        else {

        }
    )};

});

//how i did readme generator. 
// .then((data) => {
//     // get it to write onto a readme file. 
//         fs.writeFile('generatedREADME.md', generateReadMe(data),(err) => {
//             if (err) {
//                 console.log('ERROR',err);
//             }
//             else {
//                 console.log('SUCCESS you created a README.md file!');
//             }
//         });
//     });
// fs.writeFile(`./db/reviews.json`