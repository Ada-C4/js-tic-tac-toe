function TicTacToe() {
  this.board = ["0","1","2","3","4","5","6","7","8"];
  this.state = "new game";
  this.turn_count = 0;
  this.player_one = "X";
  this.player_two = "O";
  this.whose_turn = this.player_one;
}

TicTacToe.prototype.turn = function(cell_id) {
  if (this.checkGameOver() === true) {
    return;
  }
  else if (this.checkCellTaken(cell_id) === true) {
    return;
  }
  else {
    this.markCell(cell_id, this.whose_turn);
    this.incrementTurn();
    var winner = this.checkWin()[1];
    this.checkGameOver();
    if (this.state == "game over") {
      this.displayWinner(winner);
    }
  }
};

TicTacToe.prototype.checkGameOver = function() {
  if (this.state == "game over") {
    return true;
  }
  else if (this.turn_count == 9) {
    this.state = "game over";
    return true;
  }
  else {
    return false;
  }
};

TicTacToe.prototype.checkCellTaken = function(cell_id) {
  if (this.board[cell_id] == this.player_one || this.board[cell_id] == this.player_two) {
    return true;
  }
  return false;
};

TicTacToe.prototype.markCell = function(cell, player) {
  if (this.board[cell.toString()] === cell.toString()) {
    $("#" + cell).append(player);
    this.board[cell.toString()] = player;
  }
};

TicTacToe.prototype.incrementTurn = function() {
  this.turn_count += 1;
  if (this.whose_turn == this.player_one) {
    this.whose_turn = this.player_two;
  }
  else {
    this.whose_turn = this.player_one;
  }
};

TicTacToe.prototype.checkWin = function() {
  var winner;
  if (this.board[0] == this.board[1] && this.board[1] == this.board[2]) {
    this.state = "game over";
    winner = this.board[0];
  }
  else if (this.board[3] == this.board[4] && this.board[4] == this.board[5]) {
    this.state = "game over";
    winner = this.board[3];
  }
  else if (this.board[6] == this.board[7] && this.board[7] == this.board[8]) {
    this.state = "game over";
    winner = this.board[6];
  }
  else if (this.board[0] == this.board[3] && this.board[3] == this.board[6]) {
    this.state = "game over";
    winner = this.board[0];
  }
  else if (this.board[1] == this.board[4] && this.board[4] == this.board[7]) {
    this.state = "game over";
    winner = this.board[1];
  }
  else if (this.board[2] == this.board[5] && this.board[5] == this.board[8]) {
    this.state = "game over";
    winner = this.board[2];
  }
  else if (this.board[2] == this.board[4] && this.board[4] == this.board[6]) {
    this.state = "game over";
    winner = this.board[2];
  }
  else if (this.board[0] == this.board[4] && this.board[4] == this.board[8]) {
    this.state = "game over";
    winner = this.board[0];
  }
  var return_vals = [this.state, winner];
  return return_vals;
};

TicTacToe.prototype.displayWinner = function(winner) {
  if (winner == "X") {
    $(".player_one").append("Player One wins!");
  }
  else if (winner == "O") {
    $(".player_two").append("Player Two wins!");
  }
  else if (winner === undefined) {
    $(".draw").append("Draw!");
  }
};

TicTacToe.prototype.newGame = function() {
  game = new TicTacToe();
  for (var i = 0; i < 9; i++) {
    $("#" + i.toString()).html("");
  }
  $(".player_one").html("");
  $(".player_two").html("");
  $(".draw").html("");
  return game;
};
