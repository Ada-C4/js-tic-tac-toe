var TicTacToe = function() {
  this.markers = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
  this.i = 0;
  this.xScore = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0};
  this.oScore = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0};
  this.winner = "Tic Tac Toe";
};

// prototype that iterated through the markers
TicTacToe.prototype.mark = function (changeSquare) {
  var symbol = this.markers[this.i];
  $(changeSquare).html(symbol);
};

TicTacToe.prototype.score = function (squaresArray) {
  // use the appropriate score hash
  if (this.i % 2 == 0) {
    var scoreChart = this.xScore;
  } else {
    var scoreChart = this.oScore;
  }
  // in the score hash add one to the value of the key that corresponds to the letter coming in from the squaresArray
  var gameThis = this;
  squaresArray.forEach(function(letter) {
    if (scoreChart[letter] == 2) {
      // the game is over
      gameThis.winner = gameThis.markers[gameThis.i] + " wins!";
    }
    scoreChart[letter] += 1;
  })
  this.i++
  if (this.i == 9){
    // the game is over
    this.winner = "CAT: No Winner!";
  }
};
