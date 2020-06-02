var logger = require("./Logger");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");

logger.changeStrategy("toConsole");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");
