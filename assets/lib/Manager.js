class Manager {
  constructor(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = office;
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
