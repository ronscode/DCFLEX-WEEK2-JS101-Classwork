// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []

console.log("Only positive numbers!")


var arrOfNums = [1, -3, 5, -3, 0,];

function positiveNumbers(someNums) {

  var onlyHappyNums = [];

  for (var i = 0; i < someNums.length; i++) {
    if (someNums[i] > 0) {
      onlyHappyNums.push(someNums[i])
    }
  }

  console.log(onlyHappyNums);
}

positiveNumbers(arrOfNums);


