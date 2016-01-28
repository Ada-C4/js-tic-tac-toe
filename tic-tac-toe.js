var game = new TicTacToe();
game.play();

// create class that initializes constructor for tictactoe class
function TicTacToe() {
  this.board = [[0,0,0], [0,0,0],[0,0,0]];
  this.player = "player1";
  this.turns = 1;
// }
// put in what you want it to do - create a new board. say what colors you wnat people to be.
// set score to zero.
// var play = function()

// var turn = function(board){
//  // if array.even?
//  //    click = yellow
//  //  else
//  //    click = green
//     // update array with a .push into array based on where tehy click
// }

// var won = function(board){
//   // loop through and see if someone has won horizontally, vertically, diagonally
// }

//
TicTacToe.prototype.play = function() {
// this is where all my logic will live
}

var board = [[0,0,0], [0,0,0],[0,0,0]];
var slots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// this goes in index.html
  slots.forEach( function(slot) {
    $('.' + slot).click( function() {
      $(this).css('background-color', 'red'); // change this color based on turn
      // update array: board will now have an x for the particular slot its going in
    });
  });
});


TicTacToe.prototype.turn = function(){
  this.turns++;
}

 // $(".1").click(function(){
 //    $(this).css('background-color', 'red');
 // });
