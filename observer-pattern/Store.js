class Store {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  sale(discount) {
    this.subscribers.forEach((observer) =>
      observer.notify(this.name, discount)
    );
  }
}

module.exports = Store;
