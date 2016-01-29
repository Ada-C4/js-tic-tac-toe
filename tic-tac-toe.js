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
    // this.won = nil;
  }

  TicTacToe.prototype.play = function(position, marker) {
  // this is where all my logic will live
  // logic for when someone clicks on a color, slots are updated
  // var slots = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  // this calls the turn method below. without () it would not run as a function
  this.turn();
  // now, push the x or y into the particular index we want. may eventually want a double loop.
  // this.board.push(position);
  this.board[position] = marker;
  // take the index of the slots array and use that to say where to push it on board.
    // slots.forEach( function(slot) {
    //     // update array: board will now have an x for the particular slot its going in
    //
    // });
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

  TicTacToe.prototype.marker = function(board){
    
  };

// var won = function(board){
//   // loop through and see if someone has won horizontally, vertically, diagonally
// }
