function TicTacToe() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]];
  this.playerOne = '<p>X</p>';
  this.playerTwo = '<p>O</p>';
  this.currentPlayer = this.playerOne;
}

TicTacToe.prototype.play = function() {
  var i = 0;
  while (i < 9) {
    if (i % 2 === 0) {
      this.takeTurn(this.playerOne);
    } else {
      this.takeTurn(this.playerTwo);
    }
    i++;
  }
};

TicTacToe.prototype.takeTurn = function(player) {
  $(".square").click(function () {
    $(this).append(player);
  });
};
