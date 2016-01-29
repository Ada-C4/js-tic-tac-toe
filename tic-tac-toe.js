function TicTacToe() {
  this.boardTiles = [["row-0-col-0", "row-0-col-1", "row-0-col-2"],
    ["row-1-col-0", "row-1-col-1", "row-1-col-2"],
    ["row-2-col-0", "row-2-col-1", "row-2-col-2"]];
  this.turn = "X";
}

TicTacToe.prototype.play = function() {
  var self = this;

  self.boardTiles.forEach( function(row, row_index) {
    row.forEach(function(tile, tile_index) {
      $('#' + tile).one("click", function() {
        // add a p tag with X or O to correct div for front end
        $('#' + tile).append("<p class='clicked'>" + self.turn + "</p>");
        // replace boardTiles string with X or O for backend
        self.boardTiles[row_index][tile_index] = self.turn;
        // check to see if the game is won
        if (self.isGameWon()) {
          // announce winner
          $('#tic-tac-toe').append("<h3>Player " + self.turn + " won!</h3>");
          // prevent divs from being clicked again
          self.clicksOff(self);
          // display button to play again
          $('#tic-tac-toe').append("<form><input type='button' onClick='history.go(0)' value='Play Again'></form>");
        } else if (self.isGameTied()) {
          // announce tie
          $('#tic-tac-toe').append("<h3>Tie!</h3>");
          // turn clicks off
          self.clicksOff(self);
          // display button to play again
          $('#tic-tac-toe').append("<button value='Play Again' onClick='window.location.href=window.location.href'>");
        } else if (self.turn === "X") {
          // if current turn was X, switch to O
          self.turn = "O";
        } else if (self.turn === "O") {
          // if current turn was O, switch to X
          self.turn = "X";
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

TicTacToe.prototype.isGameTied = function() {
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
