$(document).on('ready', function() {
  var game = new TicTacToe();

// we could have saved the function to a variable and then passed that variable to click
  $(":button").click( function(){
    if (game.turns % 2 === 0) {
      $(this).css('background-color', 'red');
    } else {
      $(this).css('background-color', 'green');
    }
    // this gives me the class that the person has clicked on and is storing the value so I can use it elsewhere
    var position = $(this).attr("class").split(" ")[1];
    game.play(position, game.marker());
  });
});

  // creates a class that initializes constructor for tictactoe class
  // create a function for each of these functions?
  function TicTacToe() {
    this.board = [];
    this.player = "player1";
    this.turns = 0;
  }

  TicTacToe.prototype.play = function(position, marker) {
  this.won();
  this.turn();
  this.board[position] = marker;
  };

  TicTacToe.prototype.turn = function(){
    this.turns++;
    if (this.turns % 2 !== 0) {
      this.player = "player1";
    } else {
      this.player = "player2";
    }
  };

  TicTacToe.prototype.marker = function(player){
    if (this.player === "player1") {
      return 'x';
    } else {
      return 'o';
    }
  };

  TicTacToe.prototype.won = function(){
    if (this.board.slice(0,2) === ['x','x','x'] || this.board.slice(0,2) === ['o','o','o']) {
      console.log("You win!");
      return true;
    } elseif (this.board.slice(3,5) === ['x','x','x'] || this.board.slice(3,5) === ['o','o','o'] {
      console.log("You win!");
      return true;
    } elseif (this.board.slice(6,8) === ['x','x','x'] || this.board.slice(6,8) === ['o','o','o'] {
      console.log("You win!");
      return true;
    }
  };
  // if someone has taken 8 or 9 turns with no win, its a draw.


// var won = function(board){
//   // loop through and see if someone has won horizontally, vertically, diagonally
// }
