const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs')
const Employee = require("./lib/Employee.js")
var team = []
var answers
var cardString = ""


var basicQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee name:',
    }, 
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Employee Email:',
    }, 
    {
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

var askAgain = {
        type: 'confirm',
        name: 'askagain',
        message: 'Add another employee?',
    }

var additionalQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number:',  
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    }
]

ask()

function ask(){
    inquirer.prompt(basicQuestions).then(function(answers) {
        switch(answers.title) {
            case "Manager":
                inquirer.prompt(additionalQuestions[0]).then(function(result){
                    answers.officeNumber = result.officeNumber;
                    team.push(answers);
                    again();
                })
                break;
            case "Engineer":
                inquirer.prompt(additionalQuestions[1]).then(function(result){
                    answers.github = result.github;
                    team.push(answers);
                    again()
                })
                break;
            case "Intern":
                inquirer.prompt(additionalQuestions[2]).then(function(result){
                    answers.school = result.school;
                    team.push(answers);
                    again()
                })
                break;
            default:
        }
    });
}

function again(){
    inquirer.prompt(askAgain).then(function(answers) {
        if (answers.askagain == true) {
            ask();
        }
        else{
            buildCards()
            fs.writeFile("./output/Team.html", generateHTML(team), function(err, result) {
                if(err) {console.log('error', err)};
            })
        }
    })
}

function buildCards() {
    for (var x = 0; x <= team.length -1; x++){
        cardString += ` <div class="card " style="width: 18rem;">
                            <h5 class="card-header text-white bg-primary mb-3">${team[x].name}
                            <p class = "py-1 my-2">${team[x].title}</p>
                            </h5>
                            <div class="card-body mt-n3">
                                <ul class="list-group list-group-flush bg-dark">
                                    <li class="list-group-item">ID: ${team[x].id}</li>
                                    <li class="list-group-item">Email: ${team[x].email}</li>
                                    <li class="list-group-item">${Object.keys(team[x])[4]}: ${team[x][Object.keys(team[x])[4]]}</li>
                                </ul>
                            </div>
                        </div>`
    }
}

function generateHTML(){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        </head>
        <body>
            <div class = "jumbotron">
                <h1 class="display-4 text-center">My Team</h1>
            </div>
            <div class = "container d-flex justify-content-around" id = "mainContainer">
                ${cardString}
            </div>
        </body>
    </html>`
}