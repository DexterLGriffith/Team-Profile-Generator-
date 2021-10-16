const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//import lib js files. 
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const Manager = require('./Lib/Manager');

//prompt questions for TEAM BUILDING 
const employeeQuestion []
function typeOfMember () {
    return inquirer.prompt([
        {
            message: "what kind of member would you like to add?",
            name: "type",
            type: "list",
            choice: [
                "Manager",
                "Intern",
                "Engineer",
                "Im done adding members",
            ]

        }
    ])
    .then((data) => {
        if (data.type === "Manager"){
            managerQuestion();
        }
        else if (data.type === "Intern"){
            internQuestion();
        }
        else if (data.type === "Engineer"){
            engineerQuestion();
        }
        else {returnGeneratedHTML()};    
    })
}
function managerQuestion() {
    return inquirer.prompt([
        {
            message: "What is your Managers name?",
            name: "name",
            type: "input",
        },
        {
            message: "What is your ID?",
            name: "id",
            type: "input",
        },
        {
            message: "What is your email?",
            name: "email",
            type: "input",
        },
        {
            message: "What is your office number?",
            name: "officeNumber",
            type: "input",
        },

    ])
    //take data from inquirer and pass into employeequestion
    .then ((data) => {
        const newManager = new Manager(data.name,data.id,data.email,data.officeNumber);
        employeeQuestion.push(newManager);
    })
}
function engineerQuestion() {

}
function internQuestion()
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