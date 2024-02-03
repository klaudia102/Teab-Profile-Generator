const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Inquirer prompting questions:
function ask() {
inquirer.prompt([
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
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices:['Add an Engineer', 'Add an Intern', 'Finish'],
    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices:['Manager', 'Engineer', 'Intern'],
    },
    {
        name: "officeNumber",
        message: "What is their office number?"
    },
    {
        name: "GitHubName",
        message: "What is their GitHub Name?"
    },
    {
        name: "school",
        message: "What is their school name?"
    },
    {
        name: "name",
        message: "What is their name?"
    },

]).then(answers => {
    fs.writeFile("team.html", render(answers), err => {
        err ? console.error(err) : console.log ('Success!')
    })
})
}
 ask()