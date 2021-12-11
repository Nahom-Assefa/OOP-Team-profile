const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, Id, email, Github) {
    super(name, Id, email);

    this.Github = Github;

    }
}






module.exports = Engineer;