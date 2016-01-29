$(document).ready(function () {
  var game = new TicTacToe();
  console.log('create and begin the game here!');
  var cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  cells.forEach(function(cell) {
    $("#cell" + cell).one( "click", (function () {
      $(this).css("background-color", "#16A765");
      if (game.turns % 2 === 0) {
        $(this).css("background-color", "#000");
        this.player = "player2";
      }
      game.turn();
    }));
  });
});

function TicTacToe() {
  this.player = "player1";
  this.turns = 1;
}

TicTacToe.prototype.turn = function() {
  this.turns++;
};
