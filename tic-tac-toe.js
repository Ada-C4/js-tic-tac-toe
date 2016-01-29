$(document).on('ready', function() {
  var game = new TicTacToe();

  $(":button").click( function(){
    if (game.turns % 2 === 0) {
      $(this).css('background-color', 'red');
    } else {
      $(this).css('background-color', 'green');
    }
    // this gives me the class that the person has clicked on and is storing the value so I can use it elsewhere
    var position = $(this).attr("class");
    game.play(position);
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
  // how do I refer to empty board?
  // var slots = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  // this calls the turn method below. without () it would not run as a function
  this.turn();
  this.board.push(position);
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
    if (this.player = "player1") {
      var 'x' = "X";
    } else {
      var 'y' = "Y";
    }
  };


// var won = function(board){
//   // loop through and see if someone has won horizontally, vertically, diagonally
// }
