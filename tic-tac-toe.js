function TicTacToe() {
  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
                ];
  this.current_player = 1;
  this.current_player_marker = "😜";
  this.winner = null;
}

TicTacToe.prototype.playTurn = function(row, column) {
  this.board[row][column] = this.current_player;
  this.checkWinningBoard();
  if (this.winner === this.current_player) {
    $("table").remove();
    $("#board").append("Player " + this.winner + " wins!");
  } else if (this.current_player === 1) {
    this.current_player = 2;
    this.current_player_marker = "🙈";
  }
  else {
    this.current_player = 1;
    this.current_player_marker = "😜";
  }
};


TicTacToe.prototype.checkWinningBoard = function() {
  if ((this.board[0][0] === this.current_player) && (this.board[0][1] === this.current_player) && (this.board[0][2] === this.current_player) ||

  (this.board[1][0] === this.current_player) && (this.board[1][1] === this.current_player) && (this.board[1][2] === this.current_player) ||

  (this.board[2][0] === this.current_player) && (this.board[2][1] === this.current_player) && (this.board[2][2] === this.current_player) ||


  (this.board[0][0] === this.current_player) && (this.board[1][0] === this.current_player) && (this.board[2][0] === this.current_player) ||

  (this.board[0][1] === this.current_player) && (this.board[1][1] === this.current_player) && (this.board[2][1] === this.current_player) ||

  (this.board[0][2] === this.current_player) && (this.board[1][2] === this.current_player) && (this.board[2][2] === this.current_player) ||

  (this.board[0][0] === this.current_player) && (this.board[1][1] === this.current_player) && (this.board[2][2] === this.current_player) ||

  (this.board[0][2] === this.current_player) && (this.board[1][1] === this.current_player) && (this.board[2][0] === this.current_player)

  )  {
    this.winner = this.current_player;
  }
};


$(document).ready(function() {
  var game = new TicTacToe();

// the following 9 functions make the 9 spots clickable, need to DRY this up
  $(".row_1.column_1").click(function(){
    if (game.board[0][0] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(0,0);
  });

  $(".row_1.column_2").click(function(){
    if (game.board[0][1] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(0,1);
  });

  $(".row_1.column_3").click(function(){
    if (game.board[0][2] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(0,2);
  });

  $(".row_2.column_1").click(function(){
    if (game.board[1][0] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(1,0);
  });

  $(".row_2.column_2").click(function(){
    if (game.board[1][1] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(1,1);
  });

  $(".row_2.column_3").click(function(){
    if (game.board[1][2] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(1,2);
  });

  $(".row_3.column_1").click(function(){
    if (game.board[2][0] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(2,0);
  });

  $(".row_3.column_2").click(function(){
    if (game.board[2][1] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(2,1);
  });

  $(".row_3.column_3").click(function(){
    if (game.board[2][2] !== 0) {
      throw new Error ("This spot is already claimed!");
    }
    $(this).text(game.current_player_marker);
    game.playTurn(2,2);
  });

});
