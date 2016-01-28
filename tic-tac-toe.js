$(document).on('ready', function() {
  var game = new TicTacToe();

  $(":button").click( function(){
    if (game.turns % 2 === 0) {
      $(this).css('background-color', 'red');
    } else {
      $(this).css('background-color', 'green');
    }
    game.play();
  });
});

  // create class that initializes constructor for tictactoe class
  function TicTacToe() {
    this.board = [[0,0,0], [0,0,0],[0,0,0]];
    this.player = "player1";
    this.turns = 1;
    // this.won = nil;
  }

  TicTacToe.prototype.play = function() {
  // this is where all my logic will live
  var slots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // this goes in index.html
  this.turn();
    slots.forEach( function(slot) {

      // $('.' + slot).click( function() {
      //   // the this below refers to Tic object currently playing
      //   if (this.turns % 2 === 0) {
      //     // the this below refers to the specific slot it is on
      //   $(this).css('background-color', 'red');
      // } else {
      //   $(this).css('background-color', 'green');
      //   }
  // change this color based on turn
        // update array: board will now have an x for the particular slot its going in
    });
  };

  TicTacToe.prototype.turn = function(){
    this.turns++;
  };

// var won = function(board){
//   // loop through and see if someone has won horizontally, vertically, diagonally
// }

 // $(".1").click(function(){
 //    $(this).css('background-color', 'red');
 // });
