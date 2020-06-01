var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops,
]);

console.log("boots total: ", `$${boots.total}`);
console.log("shoes total: ", `$${group_shoes.total}`);

boots.print();
sneakers.print();

group_shoes.print();
