function TicTacToe() {
  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
                ];
  this.current_player = 1;
  this.current_player_marker = "😜";
}

TicTacToe.prototype.play_turn = function(row, column) {
  this.board[row][column] = this.current_player;
  if (this.current_player === 1) {
    this.current_player = 2;
    this.current_player_marker = "🙈";
  }
  else {
    this.current_player = 1;
    this.current_player_marker = "😜";
  }
};

$(document).ready(function() {
  var game = new TicTacToe();

  $(".row_1.column_1").click(function(){
    $(this).text(game.current_player_marker);
    game.play_turn(0,0);
  });

});
