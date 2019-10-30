const inquirer = require('inquirer');
const jest = require('jest');
var loopCount = 0
var team = []
var x = 0

var basicQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee name:',
    }, {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
    }, {
        type: 'input',
        name: 'email',
        message: 'Employee Email:',
    }, {
        type: 'list',
        name: 'title',
        message: 'Employee Title:',
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }
]

var againQuestion = 
{
    type: 'confirm',
    name: 'askagain',
    message: 'Add another employee?',
}

var managerQuestion =
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number:',
    }

var engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username:',
    }
]

var studentQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    }
]

ask()

function ask(){
    inquirer.prompt(basicQuestions).then(function(answers) {
        team.push(answers) 
        switch(team[x].title) {
            case "Manager":
                inquirer.prompt(managerQuestion).then(function(answers){
                    team[x].officeNumber = answers.officeNumber
                    again()
                })
                break;
            case "Engineer":
                inquirer.prompt(engineerQuestion).then(function(answers){
                    team[x].github = answers.github
                    again()
                })
                break;
            case "Intern":
                inquirer.prompt(studentQuestion).then(function(answers){
                    team[x].school = answers.school
                    again()
                })
                break;
            default:
        }
    });
}

function again(){
    console.log(team)
    inquirer.prompt(againQuestion).then(function(answers) {
        if (answers.askagain == true) {
            x++
            ask()
        }
    })
}

class Employee{
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.title = data.title;
        this.email = data.email;
    }
    getName() {}
}
