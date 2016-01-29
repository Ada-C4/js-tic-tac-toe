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
          $("#" + cell).html(///call function that returns X or 0 and then changes the player//
          );

        });
      });

      changePlayer: function() {
        
      },

      markScore: function() {
        if (player1) {
          return "X";
        } else {
          return "O";
        }
      }




  };

// player 1 and player 2 that switch back and forth
