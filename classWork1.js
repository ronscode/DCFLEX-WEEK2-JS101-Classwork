// QUESTION #1

console.log("#1");

var arrayOfNames = ["Lachlan", "Michael", "Kim",]

function sayHi(someArrayofNames) {
  for (i = 0; i < someArrayofNames.length; i++) {
    console.log("Hi, " + someArrayofNames[i] + "!")
  }
}
sayHi(arrayOfNames);



// QUESTION #2

console.log("#2");

var myName = ["Ron", "Daniel", "Cagle"];

function printInitials(someName) {
  var theInitials = ""
  for (i = 0; i < someName.length; i++) {
    theInitials += someName[i].charAt(0);
  }
  console.log(theInitials)
}

printInitials(myName)


// QUESTION #3

console.log("#3");

var listOfNums = [0, 1, 0, 1, 1, 1, 0, 0];

function theLastOne(numList) {
  for (var i = 0; i < numList.length; i++) {
    var indexOfLastOne = numList[i];
    if (indexOfLastOne == 1) {
      lastOne = i;

    }

  }
  console.log("The last one is " + lastOne)
}

theLastOne(listOfNums)

// QUESTION #4

console.log("#4")

let posNum = [1, 5, 25, 3, 99, 20];

var bigNum = 0;

function returnBigNum(bunchOfNums) {
  for (var i = 0; i < bunchOfNums.length; i++) {
    if (bunchOfNums[i] > bigNum) {
      bigNum = bunchOfNums[i];
    }
  }
  console.log('the big number is ' + bigNum)
}

returnBigNum(posNum)

