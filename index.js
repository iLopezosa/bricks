const { argv } = require("process");

if (argv.length > 4) {
  console.error("Incorrect amount of arguments");
  return null;
}

const rows = parseInt(argv[2]);
const columns = parseInt(argv[3]);
if (
  isNaN(rows)
  || isNaN(columns)
  || rows < 1
  || columns < 1
) {
  console.error("Incorrect arguments");
  return null;
}
