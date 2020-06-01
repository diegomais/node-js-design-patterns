class InventoryItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  writeLn() {
    process.stdout.write(`${this.name}: $${this.price}`);
  }
}

module.exports = InventoryItem;
