function TicTacToe() {
  this.board = ["","","","","","","","",""];
  this.state = "new game";
  this.turn_count = 0;
  this.player_one = "X";
  this.player_two = "O";
  this.whose_turn = this.player_one;
}

TicTacToe.prototype = {
  turn: function() {
    if (this.checkState === false) {
      return false;
    }
    else {
      if (this.board[0] === "") {
        clickCell("#one", "X");
        this.board[0] = "X";
      }
      console.log("A turn has occurred");
      console.log(this.board);
      this.endTurn();
    }
  }
};

TicTacToe.prototype.checkState = function() {
  if (this.state == "game over") {
    return false;
  }
  else if (this.turn_count == 9) {
    this.state = "game over";
    return false;
  }
  else {
    return true;
  }
};

TicTacToe.prototype.endTurn = function() {
  this.turn_count += 1;
  if (this.whose_turn == this.player_one) {
    this.whose_turn = this.player_two;
  }
  else {
    this.whose_turn = this.player_one;
  }
};


var clickCell = function(cell, print) {
  $(cell).click(function () {
    $(this).append(print);
  });
};
