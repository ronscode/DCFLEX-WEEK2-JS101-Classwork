// Print a box
// Write function printBox which is given a width and
// height and prints a hollow box of those given dimensions.

function printBox(width, height) {
  for (var row = 1; row <= height; row++) {
    var rowString = "";
    for (var column = 1; column <= width; column++) {
      if (row == 1 || row == height) {
        rowString += "*";
      } else {
        if (column == 1 || column == width) {
          rowString += "*";
        } else {
          rowString += " ";
        }
      }
    }
    console.log(rowString);
  }
}

printBox(10, 5);
