// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(aNum) {
  var singleLine = "";
  for (var i = 0; i < aNum; i++) {
    singleLine += "*";
  }
  var lineCount = singleLine.length;
  for (var j = 0; j < lineCount; j++) {
    console.log(singleLine);
  }
}

printSquare(5);