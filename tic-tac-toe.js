function TicTacToe() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]];
  this.playerOne = 'X';
  this.playerTwo = 'O';
  this.currentPlayer = this.playerOne;
}

TicTacToe.prototype.play = function() {
  this.takeTurn(this.currentPlayer);
};

TicTacToe.prototype.takeTurn = function(player) {
  // update board attributes
  // figure out if someone won

  this.switchPlayer();
};

TicTacToe.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
};
