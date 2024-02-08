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

const team = []

const createManager = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is their role?",
            choices: ['Manager'],
        },
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
            name: "officeNumber",
            message: "What is their office number?"
        },
    ])
    .then((answers) => {
        const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
    )
    team.push(newManager)
    })
    
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
                .then(() => {
                    return chooseNextAction()
            })
            } else if (nextAction === 'Add an Intern') {
                return createIntern()
                .then(() => {
                    return chooseNextAction()
            })
            } else if (nextAction === 'Finish') {
                return createTeam()
            }
        })
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Confirm their role",
            choices: ['Engineer'],
        },
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
            name: "github",
            message: "What is their GitHub Name?"
        },
    ])
    .then ((answers) => {
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        )
        team.push(newEngineer)
    })
}

const createIntern = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Confirm their role",
            choices: [ 'Intern'],
        },
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
    .then ((answers) => {
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school)

        team.push(newIntern)
    })
}

const createTeam = () => {
    console.log(team)
    return fs.writeFile("./output/team.html", generateTeam(team), err => {
            err ? console.error(err) : console.log('Success!')
})
}


createManager()
    .then(() => {
        return chooseNextAction()
    })

