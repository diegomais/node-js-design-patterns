class Conductor {
  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
  }
}

module.exports = new Conductor();
