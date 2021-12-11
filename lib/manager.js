const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(name, Id, email) {
    super(name, Id, email);

    this.officeNumber = Math.floor(Math.random() * 10 + 1);
  }
}

module.exports = Manager;
