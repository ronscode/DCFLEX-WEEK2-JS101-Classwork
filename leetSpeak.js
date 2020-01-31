// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string.To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//   > leetspeak('Leet')
// l337


function leetSpeak(someString) {

  // Empty string variable for the modified string

  var theAnswer = "";

  // Looping over the provided string

  for (var i = 0; i < someString.length; i++) {

    // Making a variable for the current letter and making each uppercase

    var currentLetter = someString[i].toUpperCase();

    // An if else statement to check if the letter matches and then changes that letter to the matching number, else it just adds the letter to the modified string. 

    if (currentLetter == "A") {
      theAnswer += "4"
    } else if (currentLetter == "E") {
      theAnswer += "3"
    } else if (currentLetter == "G") {
      theAnswer += "6"
    } else if (currentLetter == "I") {
      theAnswer += "1"
    } else if (currentLetter == "O") {
      theAnswer += "0"
    } else if (currentLetter == "S") {
      theAnswer += "5"
    } else if (currentLetter == "T") {
      theAnswer += "7"
    } else {
      theAnswer += currentLetter
    }

  }

  console.log(theAnswer)

}

leetSpeak("Zaphod Beeblebrox")