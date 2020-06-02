var InventoryItem = require("./InventoryItem");
var Iterator = require("./Iterator");

require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Press any direction key...");

var inventory = new Iterator([
  new InventoryItem("Poles", 9.99),
  new InventoryItem("Skis", 799.99),
  new InventoryItem("Boots", 799.99),
  new InventoryItem("Burgers", 5.99),
  new InventoryItem("Fries", 2.99),
  new InventoryItem("Shake", 4.99),
  new InventoryItem("Jeans", 59.99),
  new InventoryItem("Shoes", 39.99),
]);

process.stdin.on("keypress", (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case "right":
      inventory.next().writeLn();
      break;

    case "left":
      inventory.previous().writeLn();
      break;

    case "down":
      inventory.last().writeLn();
      break;

    case "up":
      inventory.first().writeLn();
      break;

    case "c":
      if (key.ctrl) {
        process.exit();
      }
  }
});
