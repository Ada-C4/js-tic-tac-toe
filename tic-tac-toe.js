function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.state = "new game";
  this.turn_count = 0;
}

TicTacToe.prototype = {
  turn: function() {
    console.log("A turn has occurred");
  }
};
