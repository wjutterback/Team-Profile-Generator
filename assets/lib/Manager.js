class Manager {
  constructor(name, id, email, officenum) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officenum;
    this.role = 'Manager';
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
