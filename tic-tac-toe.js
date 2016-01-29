function TicTacToe() {
  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
                ];
  this.player_1 = new Player(1, "Ham", "🐷");
  this.player_2 = new Player(2, "Abu", "🐵");
  this.current_player = this.player_1;
  this.winning_sequence = null;
}

function Player(number, name, marker) {
  this.number = number;
  this.name = name;
  this.marker = marker;
}

TicTacToe.prototype.playTurn = function(row, column) {
  this.board[row][column] = this.current_player.number;
  this.checkWinningBoard();
  if (this.winning_sequence) {
      $( "td" ).empty();
      $(".row_" + this.winning_sequence[0][0] + ".column_" + this.winning_sequence[0][1]).text(this.current_player.marker);
      $(".row_" + this.winning_sequence[1][0] + ".column_" + this.winning_sequence[1][1]).text(this.current_player.marker);
      $(".row_" + this.winning_sequence[2][0] + ".column_" + this.winning_sequence[2][1]).text(this.current_player.marker);
      $( "table").after("<h1>" + this.current_player.name + " Wins!" + "</h1>");
  } else {
    this.switch_player();
  }
};

TicTacToe.prototype.switch_player = function() {
  if (this.current_player === this.player_1) {
    this.current_player = this.player_2;
  } else {
    this.current_player = this.player_1;
  }
};

TicTacToe.prototype.checkWinningBoard = function() {
  if ((this.board[0][0] === this.current_player.number) && (this.board[0][1] === this.current_player.number) && (this.board[0][2] === this.current_player.number)) {
    this.winning_sequence = [[0, 0], [0, 1], [0, 2]];
  } else if ((this.board[1][0] === this.current_player.number) && (this.board[1][1] === this.current_player.number) && (this.board[1][2] === this.current_player.number)) {
    this.winning_sequence = [[1,0], [1,1], [1,2]];
  } else if ((this.board[2][0] === this.current_player.number) && (this.board[2][1] === this.current_player.number) && (this.board[2][2] === this.current_player.number)) {
    this.winning_sequence = [[2,0], [2,1], [2,2]];
  } else if ((this.board[0][0] === this.current_player.number) && (this.board[1][0] === this.current_player.number) && (this.board[2][0] === this.current_player.number)) {
    this.winning_sequence = [[0,0], [1,0], [2,0]];
  } else if ((this.board[0][1] === this.current_player.number) && (this.board[1][1] === this.current_player.number) && (this.board[2][1] === this.current_player.number)) {
    this.winning_sequence = [[0,1], [1,1], [2,1]];
  } else if ((this.board[0][2] === this.current_player.number) && (this.board[1][2] === this.current_player.number) && (this.board[2][2] === this.current_player.number)) {
    this.winning_sequence = [[0,2], [1,2], [2,2]];
  } else if ((this.board[0][0] === this.current_player.number) && (this.board[1][1] === this.current_player.number) && (this.board[2][2] === this.current_player.number)) {
    this.winning_sequence = [[0,0], [1,1], [2,2]];
  } else if ((this.board[0][2] === this.current_player.number) && (this.board[1][1] === this.current_player.number) && (this.board[2][0] === this.current_player.number)) {
    this.winning_sequence = [[0,2], [1,1], [2,0]];
  }
};

$(document).ready(function() {
  var game = new TicTacToe();

  var make_clickable = function(row, column) {
    $(".row_" + row + ".column_" + column).click(function() {
      if (game.board[row][column] !== 0) {
        throw new Error ("This spot is already claimed!");
      }
      $(this).text(game.current_player.marker);
      game.playTurn(row,column);
    });
  };

  for (var i = 0; i < (game.board.length); i++) {
    var row = game.board[i];
    for (var j = 0; j < (row.length); j++) {
      make_clickable(i, j);
    }
  }

});
