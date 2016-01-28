function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.state = "new game";
  this.turn_count = 0;
}

TicTacToe.prototype = {
  turn: function() {
    if (this.state == "game over") {
      return false;
    }
    if (this.turn_count == 9) {
      this.state = "game over";
    }
    click("#one", "X");
    console.log("A turn has occurred");
    this.turn_count += 1;
  }
};

var click = function(cell, print) {
  $(cell).click(function () {
    $(this).append(print);
  });
};
