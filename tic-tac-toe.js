function TicTacToe(player1, player2) {
  this.board = [[1,2,3],[4,5,6],[7,8,9]];
  this.playerOne = { key: "X",
                    name: player1};
  this.playerTwo = { key: "O",
                    name: player2};
  this.currentPlayer = this.playerOne;
  this.gameOver = false;
  this.turns = 0;
}

TicTacToe.prototype.play = function(clicked){

  if (this.gameOver === false) {
    this.turn(clicked);
    this.checkWinner();
    if (this.turns === 9){
      $("#alert").text("Nobody Wins");
    } else if (this.gameOver === true){
      $("#alert").text(this.currentPlayer.name + " is the winner!");
    } else {
      this.togglePlayer();
    }
  }
};

TicTacToe.prototype.turn = function(clicked) {
  var row = $(".row");
  for (var i=0; i < this.board.length; i++) {
    var squares = $(row[i]).children();
    var content = this.board[i];
    for (var i2=0; i2 < content.length; i2++) {
      if(clicked.attr("id") == $(squares[i2]).attr("id")){
        $(squares[i2]).append("<p>"+ this.currentPlayer.key +"</p>");
        content[i2] = this.currentPlayer.key;
      }
    }
  }
  this.turns += 1;
};

TicTacToe.prototype.togglePlayer = function(){
  if (this.currentPlayer == this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else if (this.currentPlayer == this.playerTwo) {
    this.currentPlayer = this.playerOne;
  }
  $("#alert").text(this.currentPlayer.name + "'s turn");
};

TicTacToe.prototype.checkWinner = function(){
  //checking across
  for (var i=0; i<this.board.length; i++) {
    var arrayRow = this.board[i];
    if (arrayRow[0] == arrayRow[1] && arrayRow[1] == arrayRow[2]){
        this.gameOver = true;
      }
    }
  //checking vertically
  var firstRow = this.board[0];
  var secondRow = this.board[1];
  var thirdRow = this.board[2];
  for (var j=0; j<this.board.length; j++) {
    if (firstRow[j] == secondRow[j] && secondRow[j] == thirdRow[j]){
      this.gameOver = true;
    }
  }
  //checking diagonally
  if (firstRow[0] == secondRow[1] && secondRow[1] == thirdRow[2]){
    this.gameOver = true;
  } else if (firstRow[2] == secondRow[1] && secondRow[1] == thirdRow[0]){
    this.gameOver = true;
  }
};
