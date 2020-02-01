// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'


function rockPaperScissors(player1, player2) {
  var plays = ["rock", "scissors", "paper"];

  if (player1 == "rock") {
      else if (player1 == "scissors") {
    }
  }

  var player1Index = plays.indexOf(player1);
  var player2Index = plays.indexOf(player2);

}

// rock vs paper -->     0, 2
// rock vs scissors -->  0, 1



// Another another way

var possiblePlays = ["rock", "scissors", "paper"];

var indexOfPlayer1 = possiblePlays.indexOf(player1);


///


var rock = {
  value: "rock"
}
var paper = {
  value: "paper"
}
var scissors = {
  value: "scissors"
}

rock.beats = scissors;
rock.getsBeatBy = paper;
paper.beats = rock;


