var Person = require("./Person");

// Employees
var sue = new Person("Sue", true, true, 60);
var bill = new Person("Bill", true, false, 20);
var phil = new Person("Phil", true, false);

// Shoppers
var charles = new Person("Charles", false, false, 0, 500, [
  "jeans",
  "sunglasses",
]);
var tabbitha = new Person("Tabbitha", false, false, 0, 1000);
