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
      game.play(id);
    }));
  });
});

function TicTacToe() {
  this.player = "Player 1";
  this.turns = 1;
  this.board = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  this.finish = false;
}

TicTacToe.prototype.turn = function(id) {
  var block = id[4] - 1;
  var row;
  if (block < 3) {
    row = 0;
  } else if (block >= 3 && block < 6) {
    row = 1;
  } else {
    row = 2;
  }
  column = block % 3;

  if (this.player == "Player 1") {
    this.board[row][column] = "X";
  } else {
    this.board[row][column] = "O";
  }
  // checks turn and assigns player
  this.turns++;
  if (this.turns % 2 === 0) {
    this.player = "Player 2";
  } else {
    this.player = "Player 1";
  }
};

TicTacToe.prototype.play = function(id) {
  this.turn(id);
  this.win();
  if (this.finish === false) {
    if (this.turns === 10) {
      $("#notice").text("It's a draw!");
    }
  } else {
      $("#notice").text(this.player + " wins!");
    }
  };


TicTacToe.prototype.win = function() {
  // rows
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[0][i]);
    var row = this.board[0][i];
    if ((row[0] == row[1]) && (row[1] == row[2])) {
      // this.finish = true;
    }
  }

    // columns
    var col1 = this.board[0];
    var col2 = this.board[1];
    var col3 = this.board[2];
    for (var j = 0; j < this.board.length; j++) {
    if ((col1[j] == col2[j]) && (col2[j] == col3[j])) {
      // this.finish = true;
    }

    // diagnonals
    if ((col1[0] == col2[1]) && (col2[1] == col3[2])) {
      // this.finish = true;
    }
    if ((col1[2] == col2[1]) && (col2[1] == col3[0])) {
      // this.finish = true;
    }
  }
};
