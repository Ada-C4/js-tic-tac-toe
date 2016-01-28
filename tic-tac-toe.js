function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
}

TicTacToe.prototype.drawBoard = function() {
  var row = $(".row");
  for (var i=0; i < this.board.length; i++) {
    var squares = $(row[i]).children();
    var content = this.board[i];
    for (var i2=0; i2 < content.length; i2++) {
      if (content[i2] === "X") {
        $(squares[i2]).append("<p>X</p>");
      } else if (content[i2] === "O") {
        $(squares[i2]).append("<p>O</p>");
      }
    }
  }
};

TicTacToe.prototype.playTurn = function(){
  
}
