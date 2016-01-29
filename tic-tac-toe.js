function TicTacToe() {
  this.board = [[1,2,3],[4,5,6],[7,8,9]];
  this.playerOne = "X";
  this.playerTwo = "O";
  this.currentPlayer = this.playerOne;
  this.gameOver = false;
}

TicTacToe.prototype.play = function(clicked){
  if (this.gameOver === false) {
    this.turn(clicked);
    this.checkWinner();
    this.togglePlayer();
  }
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
  if (this.currentPlayer == this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else if (this.currentPlayer == this.playerTwo) {
    this.currentPlayer = this.playerOne;
  }
  // $("#alert").text(this.currentPlayer + "'s turn");
};

TicTacToe.prototype.checkWinner = function(){
  //checking across
  for (var i=0; i<this.board.length; i++) {
    var arrayRow = this.board[i];
    if (arrayRow[0] == arrayRow[1] && arrayRow[1] == arrayRow[2]){
        $("#alert").text("Player " + this.currentPlayer + " is the winner!");
        this.gameOver = true;
      }
    }
  //checking vertically
  var firstRow = this.board[0];
  var secondRow = this.board[1];
  var thirdRow = this.board[2];
  for (var j=0; j<this.board.length; j++) {
    if (firstRow[j] == secondRow[j] && secondRow[j] == thirdRow[j]){
      $("#alert").text("Player " + this.currentPlayer + " is the winner!");
      this.gameOver = true;
    }
  }
  //checking diagonally
  if (firstRow[0] == secondRow[1] && secondRow[1] == thirdRow[2]){
    $("#alert").text("Player " + this.currentPlayer + " is the winner!");
    this.gameOver = true;
  } else if (firstRow[2] == secondRow[1] && secondRow[1] == thirdRow[0]){
    $("#alert").text("Player " + this.currentPlayer + " is the winner!");
    this.gameOver = true;
  }
};
