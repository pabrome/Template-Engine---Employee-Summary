const inquirer = require('inquirer');
const jest = require('jest');

inquirer.prompt({
    type: "number",
    name: "teamsize",
    message: "How many people are in your team?"
}).then(function(data){
    for (var x = 1; x <= data.teamsize; x++){

    }
})

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Employee name:"
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID"
    },
    {
        type: "input",
        name: "title",
        message: "Employee Title"
    }
]).then(function(data){
    console.log(data)
})


class Employee{
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.title = data.title;
        this.email = data.email;
    }
    getName() {}
}
