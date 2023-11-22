const { argv } = require("process");

function build(rows, columns) {
  if (
    isNaN(rows)
    || isNaN(columns)
    || rows < 1
    || columns < 1
  ) {
    console.error("Incorrect arguments", rows, columns);
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

  for (let row = 0; row < rows; row++) {
    const isRowEven = row % 2 === 0;
    if (isRowEven) {
      wall = (fullBrick + mortar).repeat(columns - 1) + fullBrick + "\n" + wall;
    } else {
      wall = halfBrick + (mortar + fullBrick).repeat(columns - 1) + mortar + halfBrick + "\n" + wall;
    }
  }

  console.log(wall);
  return wall.trim();
}

function main() {
  if (argv.length > 4) {
    console.error("Incorrect amount of arguments");
    return null;
  }

  const rows = parseInt(argv[2]);
  const columns = parseInt(argv[3]);
  return build(rows, columns);
}

main();

module.exports = build;