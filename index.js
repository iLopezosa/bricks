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

const amountOfBricks = rows * columns;
const MAX_BRICKS = 10_000;
if (amountOfBricks > MAX_BRICKS) {
  return "Naah, too much...here's my resignation.";
}

const halfBrick = "■";
const fullBrick = halfBrick.repeat(2);
const mortar = "|";
let wall = "";

for (let row= 0; row < rows; row++) {
  const isRowEven = row % 2 === 0;
  if (isRowEven) {
    wall += (fullBrick + mortar).repeat(columns - 1) + fullBrick + "\n";
  } else {
    wall += halfBrick + (mortar + fullBrick).repeat(columns - 1) + mortar + halfBrick + "\n";   
  }
}

console.log(wall);
return wall;