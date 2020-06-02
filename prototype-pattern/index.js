var scout_prototype = require("./scout_prototype");

var alex = scout_prototype.clone();
alex.name = "Alex Banks";
alex.addItemToList("slingshot");

var eve = scout_prototype.clone();
eve.name = "Eve Porcello";
eve.addItemToList("reading light");

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
