$(document).ready(function () {
  var game = new TicTacToe();
  console.log('create and begin the game here!');
  var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  cells.forEach(function(cell) {
    $square = $("#cell" + cell);
    $square.one( "click", (function () {
      $(this).css("background-color", "#16A765");
       var id = $(this).attr("id");
      if (game.turns % 2 === 0) {
        $(this).css("background-color", "#000");
      }
      game.turn(id);
    }));
  });
});

function TicTacToe() {
  this.player = "player1";
  this.turns = 1;
  this.player1 = [];
  this.player2 = [];
}

TicTacToe.prototype.turn = function(id) {
  // checks which player and gives access to appropriate player array
  if (this.player == "player1") {
    this.player1.push(id);
  } else {
    this.player2.push(id);
  }
  // checks turn and assigns player
  this.turns++;
  if (this.turns % 2 === 0) {
    this.player = "player2";
  } else {
    this.player = "player1";
  }
};

TicTacToe.prototype.win = function() {

};
