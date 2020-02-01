// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

console.log('Lets play RPS')

function rockPaperScissors(player1, player2) {

  var plays = ["rock", "scissors", "paper"];
  // Checking to see if player one beats player one's throw
  if (player1 == "rock" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock") {
    console.log('Player 1 wins!')
    // Checking to see if player two beats player one's throw
  } else if (player2 == "rock" && player1 == "scissors" || player2 == "scissors" && player1 == "paper" || player2 == "paper" && player1 == "rock") {
    console.log('Player 2 wins!')
    // If they are the same the game is a tie
  } else if (player1 == player2) {
    console.log('The game is a tie!');
  }
}


rockPaperScissors('rock', 'rock')





