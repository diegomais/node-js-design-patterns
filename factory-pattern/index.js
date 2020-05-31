var Shopper = require("./Shopper");
var Employee = require("./Employee");

var alex = new Shopper("Alex Banks", 100);
var eve = new Employee("Eve Porcello", 100, "This and That");

console.log(alex.toString());
console.log(eve.toString());
