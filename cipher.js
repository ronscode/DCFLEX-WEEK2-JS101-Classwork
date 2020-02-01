// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

console.log('cipher')

function cipher(string, offset) {

  var alphabet = "abcdefghijklmnopqrztuvwxyz";

  var encodedString = "";

  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];

    var indexOfCurrentLetter = alphabet.indexOf(currentLetter);

    var newLetterIndex = indexOfCurrentLetter + offset;

    var newLetter = alphabet[newLetterIndex];
    if (currentLetter === ' ') {
      encodedString += ' '
    }
    encodedString += newLetter;

    if (newLetterIndex > 25) {
      newLetterIndex = newLetter + 25;
    } else if (newLetterIndex < 0) {
      newLetterIndex = newLetterIndex + 26
    }


  }
  console.log("the secret message is " + encodedString)
  return encodedString;
}

cipher("attack at dawn", 2)




function decipher(string, offset) {

  var alphabet = "abcdefghijklmnopqrztuvwxyz";

  var encodedString = "";

  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];

    var indexOfCurrentLetter = alphabet.indexOf(currentLetter);

    var newLetterIndex = indexOfCurrentLetter - offset;

    if (currentLetter === " ") {
      encodedString += " "
    }
    encodedString += newLetter;

    if (newLetterIndex > 25) {
      newLetterIndex = newLetter + 25;
    } else if (newLetterIndex < 0) {
      newLetterIndex = newLetterIndex + 26
    }


    var newLetter = alphabet[newLetterIndex];

  }
  console.log("The decrypted message is " + encodedString)
  return encodedString;
}

decipher("cvvcem cv fcyp", 2)