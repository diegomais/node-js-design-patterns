var InventoryItem = require("./InventoryItem");

require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Press any direction key...");

var inventory = [
  new InventoryItem("Poles", 9.99),
  new InventoryItem("Skis", 799.99),
  new InventoryItem("Boots", 799.99),
  new InventoryItem("Burgers", 5.99),
  new InventoryItem("Fries", 2.99),
  new InventoryItem("Shake", 4.99),
  new InventoryItem("Jeans", 59.99),
  new InventoryItem("Shoes", 39.99),
];

process.stdin.on("keypress", (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case "right":
      process.stdout.write("right");
      break;

    case "left":
      process.stdout.write("left");
      break;

    case "down":
      process.stdout.write("down");
      break;

    case "up":
      process.stdout.write("up");
      break;

    case "c":
      if (key.ctrl) {
        process.exit();
      }
  }
});
