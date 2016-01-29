var turn = 0;
var icon = 'X';
var player = 'Player 1';

function TicTacToe() {
  this.board = ["cell 0", "cell 1","cell 2","cell 3","cell 4","cell 5","cell 6","cell 7","cell 8"];
}



TicTacToe.prototype.getBoard = function() {
  return this.board;
};

TicTacToe.prototype.markBoard = function() {
  var self = this;
  $("td").bind("click", function() {
    var index = 0;
    if (turn%2 === 0){
      //var index = 0;
        for (index = 0; index < self.board.length; index ++){
          if (self.board[index] === this.className){
            $(this).addClass("x-clicked");
            self.board[index] = "X";
            turn = turn + 1;
          }
        }
      }else{
      //  index = 0;
        for (index = 0; index < self.board.length; index ++){
          if (self.board[index] === this.className){
            //alert(this.board[index] + "  =  " + this.className + "  YAY");
            $(this).addClass("o-clicked");
            self.board[index] = "O";
            turn = turn + 1;
          }
        }
      }
      self.scoreBoard();
    });
  //this.scoreBoard();
};

TicTacToe.prototype.scoreBoard = function() {
  if (this.board[1]===this.board[2]&&this.board[0]===this.board[1]){
    alert("Player " + this.board[0] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[3]===this.board[4]&&this.board[5]===this.board[3]){
    alert("Player " + this.board[3] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[6]===this.board[7]&&this.board[8]===this.board[6]){
    alert("Player " + this.board[6] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[0]===this.board[3]&&this.board[0]===this.board[6]){
    alert("Player " + this.board[6] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[1]===this.board[4]&&this.board[7]===this.board[1]){
    alert("Player " + this.board[1] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[2]===this.board[5]&&this.board[8]===this.board[2]){
    alert("Player " + this.board[2] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[2]===this.board[4]&&this.board[6]===this.board[2]){
    alert("Player " + this.board[2] + " + has won! Press 'OK' to play again!");
    location.reload();
  }else if(this.board[0]===this.board[4]&&this.board[8]===this.board[0]){
    alert("Player " + this.board[0] + " + has won! Press 'OK' to play again!");
    location.reload();
  }
};
