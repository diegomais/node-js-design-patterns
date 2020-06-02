class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  setNext(storage) {
    this.next = storage;
  }

  lookInLocalInventory(itemName) {
    var index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }

  find(itemName) {
    var foundItem = this.lookInLocalInventory(itemName);
    if (foundItem) {
      return {
        name: foundItem.name,
        qty: foundItem.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "now" : `${this.deliveryTime} day(s)`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `we do not carry ${itemName}`;
    }
  }
}

module.exports = Storage;
