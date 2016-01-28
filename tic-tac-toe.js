function TicTacToe() {
  this.player1 = true;
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.board_spaces = ["r0c0", "r0c1", "r0c2", "r1c0", "r1c1", "r1c2", "r2c0", "r2c1", "r2c2"];
}

TicTacToe.prototype.playTurn = function() {
  var self = this;
  this.board_spaces.forEach(function(space) {
    $("#" + space).click(function() {
      $("#" + space).text(self.getSymbol());
      self.changePlayer();
      self.updateBoard(this);
    });
  });
};

TicTacToe.prototype.updateBoard = function(cell) {
  row = (cell.id[1]);
  column = (cell.id[3]);
  console.log(row, column);
  this.board[row][column] = this.getSymbol();
  console.log(this.board);
}

TicTacToe.prototype.changePlayer = function() {
  this.player1 = !this.player1;
};

TicTacToe.prototype.getSymbol = function() {
  return this.player1 ? "X" : "O";
};

TicTacToe.prototype.play = function() {
  this.playTurn();
};
