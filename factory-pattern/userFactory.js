var Employee = require("./Employee");
var Shopper = require("./Shopper");

var userFactory = (name, money = 0, type, employer) => {
  if (type === "employee") {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
};

module.exports = userFactory;
