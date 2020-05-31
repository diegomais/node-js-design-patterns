class Person {
  constructor(
    name,
    isEmployee = false,
    isManager = false,
    hours = 40,
    money = 0,
    shoppingList = []
  ) {
    this.name = name;
    this.isEmployee = isEmployee;
    this.isManager = isManager;
    this.hours = hours;
    this.money = money;
    this.shoppingList = shoppingList;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
