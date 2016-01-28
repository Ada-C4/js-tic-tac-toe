function TicTacToe() {
  this.x = true;
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.board_spaces = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];
}


TicTacToe.prototype.addSymbolOnClick = function() {
  var self = this;
  this.board_spaces.forEach(function(space) {
    $("#" + space).click(function() {
      $("#" + space).text(self.getSymbol());
      self.x = !self.x;
    });
  })
};

TicTacToe.prototype.getSymbol = function() {
  return this.x ? "X" : "O";
};

TicTacToe.prototype.play = function() {
  this.addSymbolOnClick();
};
