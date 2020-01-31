// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.
//
// > sumNumbers([1, 4, 8])
// 13

console.log("Sum the numbers");

var bunchOfNums = [1, 4, 8];

function sumNumbers(someNums) {
  var theTotal = 0;
  for (var i = 0; i < someNums.length; i++) {
    theTotal += someNums[i]
  }
  console.log(theTotal)
  return theTotal;
}

sumNumbers(bunchOfNums);