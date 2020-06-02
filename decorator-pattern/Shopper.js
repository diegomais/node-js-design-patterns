class Shopper {
  constructor(name, account = 0) {
    this.name = name;
    this.account = account;
    this.items = [];
  }

  purchase(item) {
    if (item.price > this.account) {
      console.log(`Cannot afford ${item.name}`);
    } else {
      console.log(`Purchasing item ${item.name}`);
      this.account -= item.price;
      this.items.push(item);
    }
  }

  printStatus() {
    console.log(`${this.name} has purchased ${this.items.length} items:`);
    this.items.forEach((item) => {
      console.log(`   * ${item.name} - ${item.price}`);
    });
    console.log(`${this.name} has $${this.account.toFixed(2)} remaining.`);
  }
}

module.exports = Shopper;
