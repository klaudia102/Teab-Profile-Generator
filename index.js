const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee.js')
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateTeam = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const createManager = () => {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is Team Manager's name?",
        },

        {
            name: "id",
            message: "What is their id?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "officeNumber",
            message: "What is their office number?"
        },
    ])
}
const chooseNextAction = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ['Add an Engineer', 'Add an Intern', 'Finish'],
        },
    ])
        .then((result) => {
            const nextAction = result.action
            
            if (nextAction === 'Add an Engineer') {
                return createEngineer()
            } else if (nextAction === 'Add an Intern') {
                return createIntern()
            } 
        })
        .then((employee) => {
            if (employee) {
                team.push(employee)
                return chooseNextAction()
            }
        })
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is their name?",
        },

        {
            name: "id",
            message: "What is their id?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "GitHubName",
            message: "What is their GitHub Name?"
        },
    ])
}

const createIntern = () => {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is their name?",
        },

        {
            name: "id",
            message: "What is their id?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "school",
            message: "What is their school name?"
        },
    ])
}

let team = []

createManager()
    .then((manager) => {
        team.push(manager)
        return chooseNextAction()
    })
    .then(answers => {
                fs.writeFile("team.html", generateTeam, err => {
                    err ? console.error(err) : console.log('Success!')
                })
            })

