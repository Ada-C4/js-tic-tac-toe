function TicTacToe() {
  this.boardTiles = [["row-0-col-0", "row-0-col-1", "row-0-col-2"],
    ["row-1-col-0", "row-1-col-1", "row-1-col-2"],
    ["row-2-col-0", "row-2-col-1", "row-2-col-2"]];
  this.turn = "player1";
}

TicTacToe.prototype.play = function() {
  var self = this;

  self.boardTiles.forEach( function(row, row_index) {
    row.forEach(function(tile, tile_index) {
      $('#' + tile).one("click", function() {
        // if it's player 1's turn
        if (self.turn === "player1") {
          // add a p tag with content "X" to appropriate div for front end
          $('#' + tile).append("<p class='clicked'>X</p>");
          // replace boardTiles string with "X" for backend
          self.boardTiles[row_index][tile_index] = "X";
          // check to see if the game is won
          if (self.isGameWon()) {
            // announce winner
            $('#tic-tac-toe').append("<h3>Player 1 won!</h3>");
            // prevent divs from being clicked again
            self.clicksOff(self);
            // display button to play again
            $('#tic-tac-toe').append("<form><input type='button' onClick='history.go(0)' value='Play Again'></form>");
          } else {
            // switch players
            self.turn = "player2";
          }

        // else if it's player 2's turn, repeat same logic as above
        } else if (self.turn === "player2") {
          $('#' + tile).append("<p class='clicked'>O</p>");
          self.boardTiles[row_index][tile_index] = "O";
          if (self.isGameWon()) {
            $('#tic-tac-toe').append("<h3>Player 2 won!</h3>");
            self.clicksOff(self);
            $('#tic-tac-toe').append("<form><input type='button' onClick='history.go(0)' value='Play Again'></form>");
          } else {
            self.turn = "player1";
          }
        }
      });
    });
  });
};

TicTacToe.prototype.isGameWon = function() {
  var self = this, isWon = false;

  // if won horizontally, return true
  self.boardTiles.forEach(function(row) {
    if (row[0] === row[1] && row[0] === row[2]) {
      isWon = true;
    }
  });

  // if won vertically, return true
  self.boardTiles[0].forEach(function(tile, index) {
    if (tile === self.boardTiles[1][index] && tile === self.boardTiles[2][index]) {
      isWon = true;
    }
  });

  // if won diagonally, return true
  if (self.boardTiles[0][0] === self.boardTiles[1][1] && self.boardTiles[0][0] === self.boardTiles[2][2]) {
    isWon = true;
  } else if (self.boardTiles[0][2] === self.boardTiles[1][1] && self.boardTiles[0][2] === self.boardTiles[2][0]) {
    isWon = true;
  }

  return isWon;
};

TicTacToe.prototype.isGameTied = function(gameObject) {
  var self = this, tie = true;

  this.boardTiles.forEach(function(row){
    row.forEach(function(tile) {
      if (tile.length > 1){ tie = false; }
    });
  });

  return tie;
};

TicTacToe.prototype.clicksOff = function(gameObject) {
  var self = gameObject;
  self.boardTiles.forEach( function(row) {
    row.forEach(function(tile) {
      $('#' + tile).off("click");
    });
  });
};
