class Conductor {
  constructor() {
    this.history = [];
    this.undone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    this.history.forEach((command) => console.log(command.name));
  }

  undo() {
    var command = this.history.pop();
    console.log(`undo ${command.name}`);
    command.undo();
    this.undone.push(command);
  }

  redo() {
    var command = this.undone.pop();
    console.log(`redo ${command.name}`);
    command.execute();
    this.history.push(command);
  }
}

module.exports = new Conductor();
