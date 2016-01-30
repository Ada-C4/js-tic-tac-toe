$(document).ready(function () {
  var game = new TicTacToe();
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
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.finish = false;
}

TicTacToe.prototype.turn = function(id) {
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

TicTacToe.prototype.winningPlay = function() {
  // rows
  for (var i = 0; i < this.board.length; i++) {
    var row = this.board[i];
    if (row[0] == row[1] && row[1] == row[2]) {
      this.finish = true;
    }

    // columns
    var col1 = this.board[0];
    var col2 = this.board[1];
    var col3 = this.board[2];
    if (col1[i] == col2[i] && col2[i] == col3[i]) {
      this.finish = true;
    }

    // diagnonals
    if (col1[0] == col2[1] && col2[1] == col3[2]) {
      this.finish = true;
    }
    if (col1[2] == col2[1] && col2[1] == col3[0]) {
      this.finish = true;
    }
}
};
