var TicTacToe = function() {
 // initialize things when a new game starts
 this.board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
 this.player1 = true;
 this.player2 = false;
};


  TicTacToe.prototype.play = function() {
//when a player
//how to update the array??
// how to access board in here.
//player 1 will be 1s and player 2 will be 2s.
    var self = this;
      self.board.forEach(function(cell) {
        $("#" + cell).click(function() {
          $("#" + cell).html(self.markScore(), self.changePlayer()
          );
        });
      }); //ends forEach
    };  // ends play function

  TicTacToe.prototype.markScore = function() {
        if (this.player1) {
          return "<h1 class='x'>X</h1>";
        } else {
          return "<h1 class='o'>O</h1>";
        }
      };

  TicTacToe.prototype.changePlayer = function() {
        if (this.player1) {
          this.player1 = false;
          this.player2 = true;
        } else {
          this.player2 = false;
          this.player1 = true;
        }
      };







// player 1 and player 2 that switch back and forth
