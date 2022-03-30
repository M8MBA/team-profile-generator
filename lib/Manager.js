const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);

    this.officeNumber = officeNumber;
  }

  getOfficenumber() {
    return this.officeNumber
  }
}

module.exports = Manager;