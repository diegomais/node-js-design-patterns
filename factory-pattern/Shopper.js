var Person = require("./Person");

class Shopper extends Person {
  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

module.exports = Shopper;
