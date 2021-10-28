const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
//import lib js files. 
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const Manager = require('./Lib/Manager');

const OUTPUT_DIR = path.resolve(__dirname, "Assets");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require('./generateHTML');

//prompt questions for TEAM BUILDING 
const employeeQuestion = []
function typeOfMember() {
    return inquirer.prompt([
        {
            message: "What kind of member would you like to add?",
            name: "type",
            type: "list",
            choices: [
                "Manager",
                "Intern",
                "Engineer",
                "Im done adding members"
            ],

        }
    ])
        .then((data) => {
            console.log(data);
            if (data.type === "Manager") {
                managerQuestion();
            }
            else if (data.type === "Intern") {
                internQuestion();
            }
            else if (data.type === "Engineer") {
                engineerQuestion();
            }
            else {
                writeToFile();
                console.log('Heres your team!');
            }
        });
}
function managerQuestion() {
    return (
        inquirer.prompt([
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
                name: "number",
                type: "input",
            },
        ])
            //take data from inquirer and pass into employeequestion
            .then((data) => {
                const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
                employeeQuestion.push(newManager);
                typeOfMember();
            })
    );
}
//pretty much copy paste from last section... change a couple variables. 
function engineerQuestion() {
    return (
        inquirer.prompt([
            {
                message: "What is your Engineers name?",
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
                message: "What is your Github Url?",
                name: "Github",
                type: "input",
            },
        ])
            //take data from inquirer and pass into employeequestion
            .then((data) => {
                const newEngineer = new Engineer(data.name, data.id, data.email, data.Github);
                employeeQuestion.push(newEngineer);
                typeOfMember();
            })
    );
}
//pretty much copy paste from last section... change a couple variables. 
function internQuestion() {
    return (
        inquirer.prompt([
            {
                message: "What is your Interns name?",
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
                message: "What school did you go to?",
                name: "school",
                type: "input",
            },

        ])
            //take data from inquirer and pass into employeequestion
            .then((data) => {
                const newIntern = new Intern(data.name, data.id, data.email, data.school);
                employeeQuestion.push(newIntern);
                typeOfMember();
            })
    );
}
typeOfMember();
//get it to write the index.html and CSS file.  
const writeToFile = () => {
    const contentHTML = render(employeeQuestion);
    fs.writeFileSync(outputPath, contentHTML, "utf-8");
};

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