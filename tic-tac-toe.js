var TicTacToe = function() {
 // initialize things when a new game starts
 this.board = ["r0c0", "r0c1", "r0c2", "r1c0", "r1c1", "r1c2", "r2c0", "r2c1", "r2c2"];
 this.player1 = true;
 this.player2 = false;
 this.score = [[9, 9, 9], [9, 9, 9], [9, 9, 9]];
};

  TicTacToe.prototype.play = function() {
//player 1 will be 1s and player 2 will be 2s.
    var self = this;
      self.board.forEach(function(cell) {
        $("#" + cell).click(function() {
          $("#" + cell).html(self.markBoard());
          self.scoreGame($(this));
          self.checkWinner();
          self.changePlayer($(this));
        });
      }); //ends forEach
    };  // ends play function

//This function is called in .play
  TicTacToe.prototype.markBoard = function() {
    if (this.player1) {
      return "<h1 class='x'>X</h1>";
    } else {
      return "<h1 class='o'>O</h1>";
    }
  };

// This function is called in .play (before changePlayer)
  TicTacToe.prototype.scoreGame = function(clicked) {
// assign point depending on whose turn it is.
    var point;
    if (this.player1) {
      point = 1;
    } else {
      point = 2;
    }
// put point in 2D scoring array
    if (clicked.attr("id") === "r0c0") {
      this.score[0][0] = point;
    } else if (clicked.attr("id") === "r0c1") {
      this.score[0][1] = point;
    } else if (clicked.attr("id") === "r0c2") {
      this.score[0][2] = point;
    } else if (clicked.attr("id") === "r1c0") {
      this.score[1][0] = point;
    } else if (clicked.attr("id") === "r1c1") {
      this.score[1][1] = point;
    } else if (clicked.attr("id") === "r1c2") {
      this.score[1][2] = point;
    } else if (clicked.attr("id") === "r2c0") {
      this.score[2][0] = point;
    } else if (clicked.attr("id") === "r2c1") {
      this.score[2][1] = point;
    } else {
      this.score[2][2] = point;
    }
  };

  //This function is called in .play
    TicTacToe.prototype.changePlayer = function() {
      this.player1 = !this.player1;
      this.player2 = !this.player2;
    };

// decide a winner
  TicTacToe.prototype.checkWinner = function() {
    var n = 0;
    if (this.score[n].toString() === "2,2,2") {
      alert("Nice job O!");
    }
// check to see if score has certain patterns in it
// For example, if there are all 1s this.score[0], player 1 has won.
// Alert player that they have won.
  };
