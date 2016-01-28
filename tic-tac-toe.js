function TicTacToe() {
  this.board = ["0","1","2","3","4","5","6","7","8"];
  this.state = "new game";
  this.turn_count = 0;
  this.player_one = "X";
  this.player_two = "O";
  this.whose_turn = this.player_one;
}

TicTacToe.prototype = {
  turn: function(cell_id) {
    if (this.checkState === false) {
      return false;
    }
    else {
      this.markCell(cell_id, this.whose_turn);
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

TicTacToe.prototype.markCell = function(cell, player) {
  if (this.board[cell.toString()] === cell.toString()) {
    $("#" + cell).append(player);
    this.board[cell.toString()] = player;
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
