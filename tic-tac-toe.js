function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.playerOne = "X";
  this.playerTwo = "O";
  this.currentPlayer = this.playerOne;
}

TicTacToe.prototype.play = function(clicked){
  this.turn(clicked);
};


TicTacToe.prototype.turn = function(clicked) {
  var row = $(".row");
  for (var i=0; i < this.board.length; i++) {
    var squares = $(row[i]).children();
    var content = this.board[i];
    for (var i2=0; i2 < content.length; i2++) {
      if(clicked.attr("id") == $(squares[i2]).attr("id")){
        $(squares[i2]).append("<p>"+ this.currentPlayer +"</p>");
        content[i2] = this.currentPlayer;
      }
    }
  }
};


TicTacToe.prototype.togglePlayer = function(){

};
