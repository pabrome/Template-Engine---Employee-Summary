class Employee {
    constructor(answers) {
        this.name = answers.name;
        this.id = answers.id;
        this.title = answers.title;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee