class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = 'Engineer';
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
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
