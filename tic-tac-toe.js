function TicTacToe() {
  this.player1 = true;
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.turns = 0;
  this.board_spaces = ["r0c0", "r0c1", "r0c2", "r1c0", "r1c1", "r1c2", "r2c0", "r2c1", "r2c2"];
}

TicTacToe.prototype.play = function() {
  var self = this;
  this.board_spaces.forEach(function(space) {
    $("#" + space).click(function() {
      // Check to see if space has not been taken
      if (this.innerHTML === "") {
        $("#" + space).text(self.getSymbol());
        self.updateBoard(this);
        self.changePlayer();
        self.checkWinner();
      }
    });
  });
};

TicTacToe.prototype.checkWinner = function() {
  // Check all horizontal wins
  if (this.board[0][0] == "X" && this.board[0][1] == "X" && this.board[0][2] == "X") {
    this.displayWinner("Player 1 wins!");
  } else if (this.board[0][0] == "O" && this.board[0][1] == "O" && this.board[0][2] == "O") {
    this.displayWinner("Player 2 wins!");
  } else if (this.board[1][0] == "X" && this.board[1][1] == "X" && this.board[1][2] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[1][0] == "O" && this.board[1][1] == "O" && this.board[1][2] == "O") {
      this.displayWinner("Player 2 wins!");
  } else if (this.board[2][0] == "X" && this.board[2][1] == "X" && this.board[2][2] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[2][0] == "O" && this.board[2][1] == "O" && this.board[2][2] == "O") {
      this.displayWinner("Player 2 wins!");
    // Check all vertical wins
  } else if (this.board[0][0] == "X" && this.board[1][0] == "X" && this.board[2][0] == "X") {
    this.displayWinner("Player 1 wins!");
  } else if (this.board[0][0] == "O" && this.board[1][0] == "O" && this.board[2][0] == "O") {
    this.displayWinner("Player 2 wins!");
  } else if (this.board[0][1] == "X" && this.board[1][1] == "X" && this.board[2][1] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[0][1] == "O" && this.board[1][1] == "O" && this.board[2][1] == "O") {
      this.displayWinner("Player 2 wins!");
  } else if (this.board[0][2] == "X" && this.board[1][2] == "X" && this.board[2][2] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[0][2] == "O" && this.board[1][2] == "O" && this.board[2][2] == "O") {
      this.displayWinner("Player 2 wins!");
    // check all diagonal wins
  } else if (this.board[0][0] == "X" && this.board[1][1] == "X" && this.board[2][2] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[0][0] == "O" && this.board[1][1] == "O" && this.board[2][2] == "O") {
      this.displayWinner("Player 2 wins!");
  } else if (this.board[2][0] == "X" && this.board[1][1] == "X" && this.board[0][2] == "X") {
      this.displayWinner("Player 1 wins!");
  } else if (this.board[2][0] == "O" && this.board[1][1] == "O" && this.board[0][2] == "O") {
      this.displayWinner("Player 2 wins!");
    // check for cat's game
  } else if (this.turns == 9) {
    this.displayWinner("It's a tie!");
  }
};

TicTacToe.prototype.displayWinner = function(winner) {
  alert(winner);
  this.resetBoard();
};

TicTacToe.prototype.resetBoard = function() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.board_spaces.forEach(function(space) {
    $("#" + space).text("");
  });
  this.player1 = true;
  this.turns = 0;
};

TicTacToe.prototype.updateBoard = function(cell) {
  row = (cell.id[1]);
  column = (cell.id[3]);
  this.board[row][column] = this.getSymbol();
};

TicTacToe.prototype.changePlayer = function() {
  this.player1 = !this.player1;
  this.turns += 1;
};

TicTacToe.prototype.getSymbol = function() {
  return this.player1 ? "X" : "O";
};
