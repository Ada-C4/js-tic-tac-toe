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
    var result = game.win();
    if (result === true) {
      $(body).one("append", (function () {
        $(this).html('<p>win1</p>');
      }));
    }
  });
});

function TicTacToe() {
  this.player = "player1";
  this.turns = 1;
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}

TicTacToe.prototype.turn = function(id) {
  // checks which player and gives access to appropriate player array
  var block = id[4] - 1;
  var index;
  if (block < 3) {
    index = 0;
  } else if (block >= 3 && block < 6) {
    index = 1;
  } else {
    index = 2;
  }
  block %= 3;

  if (this.player == "player1") {
    this.board[index][block] = "X";
  } else {
    this.board[index][block] = "O";
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
  if (this.player1 == ["cell1", "cell2", "cell3"]) {
    return true;
  }
};
