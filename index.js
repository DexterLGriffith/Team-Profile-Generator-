const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//import lib js files. 
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const Manager = require('./Lib/Manager');
const templateIndex = require('./templateIndex');

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
            name: "managerName",
            type: "input",
        },
        {
            message: "What is your ID?",
            name: "managerId",
            type: "input",
        },
        {
            message: "What is your email?",
            name: "managerEmail",
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
//pretty much copy paste from last section... change a couple variables. 
function engineerQuestion() {
    return inquirer.prompt([
        {
            message: "What is your Managers name?",
            name: "engineerName",
            type: "input",
        },
        {
            message: "What is your ID?",
            name: "engineerId",
            type: "input",
        },
        {
            message: "What is your email?",
            name: "engineerEmail",
            type: "input",
        },
        {
            message: "What is your Github Url?",
            name: "Github",
            type: "input",
        },

    ])
    //take data from inquirer and pass into employeequestion
    .then ((data) => {
        const newEngineer = new Engineer(data.name,data.id,data.email,data.Github);
        employeeQuestion.push(newEngineer);
    })
}
//pretty much copy paste from last section... change a couple variables. 
function internQuestion() {
    return inquirer.prompt([
        {
            message: "What is your Managers name?",
            name: "internName",
            type: "input",
        },
        {
            message: "What is your ID?",
            name: "internId",
            type: "input",
        },
        {
            message: "What is your email?",
            name: "internEmail",
            type: "input",
        },
        {
            message: "What school did you go to?",
            name: "internSchool",
            type: "input",
        },

    ])
    //take data from inquirer and pass into employeequestion
    .then ((data) => {
        const newIntern = new Intern(data.name,data.id,data.email,data.school);
        employeeQuestion.push(newIntern);
    })
}
//get it to write the index.html and CSS file.  
.then((data) => {
    fs.writeFileSync('', templateIndex)
}

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