var Shopper = require("./Shopper");

class Employee extends Shopper {
  constructor(name, money = 0, employer = "") {
    super(name, money);
    this.employer = employer;
    this.employed = true;
  }

  payDay(money = 0) {
    this.money += money;
  }
}

module.exports = Employee;
