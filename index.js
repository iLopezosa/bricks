const { argv } = require("process");

if (argv.length > 4) {
  console.error("Incorrect amount of arguments");
  return null;
}