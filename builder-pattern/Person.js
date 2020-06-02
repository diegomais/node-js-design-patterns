class Person {
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList || [];
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
