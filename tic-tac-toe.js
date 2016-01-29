//click handler
  $("td").click(function () {
    tictac.takeTurn(this);
  });


////////////////////////////////

//game logic
function TicTacToe () {
};


//logic for a single turn
TicTacToe.prototype.takeTurn = function(clickedSquare){
  var coords = this.getCoords(clickedSquare);
  var newArray = this.markArray(coords);
  this.updateBoard(newArray);
  this.markSquare(clickedSquare);
  this.changePlayer();
};

//defines who the current player is
TicTacToe.prototype.updatePlayer = function(nextPlayer){
  this.currentPlayer = nextPlayer;
};


//defines the board
TicTacToe.prototype.updateBoard = function(newArray) {
  this.currentBoard = newArray;
}

//gets the coordinates from which square was clicked
TicTacToe.prototype.getCoords = function(square) {
  var rowInd = (square.parentNode).rowIndex;
  var colInd = square.cellIndex;
  var coordinates = {row: rowInd, col: colInd};
  return coordinates
};

//checks to see if game is finished
TicTacToe.prototype.checkGame = function () {

};

TicTacToe.prototype.begin = function(){
  this.updateBoard([[0,0,0], [0,0,0],[0,0,0]]);
  this.updatePlayer("trooper");
  //set up everything for a new game, if needed
};

//changes the array contents based on square that was clicked
//returns array that can be used to update the board
//board is marked with player name
TicTacToe.prototype.markArray = function(coords) {
  var board = this.currentBoard;
  var row = coords["row"];
  var col = coords["col"];
  board[row][col] = this.currentPlayer;
  return board;
};

//alternates player
TicTacToe.prototype.changePlayer = function() {
  if (this.currentPlayer == "trooper") {
    this.updatePlayer("vader");
  } else if  (this.currentPlayer == "vader") {
    this.updatePlayer("trooper");
  }
};

//actually marks the square in the browser
TicTacToe.prototype.markSquare = function(square) {
  square.setAttribute("class", this.currentPlayer);
};
