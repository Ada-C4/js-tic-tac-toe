function TicTacToe() {
  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
                ];
  this.current_player = 1;
}

TicTacToe.prototype.play_turn = function(row, column) {
  this.board[row][column] = this.current_player;
  if (this.current_player === 1) {
    this.current_player = 2;
  }
  else {
    this.current_player = 1;
  }
};

$(document).ready(function() {



});
