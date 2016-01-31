function TicTacToe() {
  this.currentPlayer = "Toad";
  this.board = [["r1c1", "r1c2", "r1c3"], ["r2c1", "r2c2", "r2c3"], ["r3c1", "r3c2", "r3c3"]];
  this.play();
}

TicTacToe.prototype = {
  play: function() {
    this.addMarker();
  },

  addMarker: function() {
    var self = this;
    self.board.forEach(function(row, rowIndex) {
      row.forEach(function(cell, cellIndex) {
        $("#" + cell).one ("click", function(){
          $("#" + cell).html('<img src='+self.getMarker()+'>');
        self.board[rowIndex][cellIndex] = self.getMarker();
        if (self.checkforWin()) {
          $("#winners").text(self.currentPlayer + " has won!");
        }
        self.changePlayer();
        });
      });
    });
  },

  getMarker: function() {
    if (this.currentPlayer === "Toad"){
       return './frog.png';
    } else {
       return './fly.png';
    }
  },

  changePlayer: function () {
    this.currentPlayer = (this.currentPlayer === "Fly") ? "Toad" : "Fly";
  },

  checkforWin: function () {
    var self = this; won = false;

    self.board.forEach(function(row) {
      if (row[0] == row[1] && row[0] == row[2]) {
        won = true;
      }
    });

    self.board[0].forEach(function(cell, cellIndex) {
      if (self.board[0][cellIndex] == self.board[1][cellIndex] && self.board[0][cellIndex] == self.board[2][cellIndex]) {
        won = true;
      }
    });

    if (self.board[0][0] == self.board[1][1] && self.board[0][0] == self.board[2][2]) {
      won = true;
    }
    if (self.board[0][2] == self.board[1][1] && self.board[0][2] == self.board[2][0]) {
      won = true;
    }
    return won;
  },
};
