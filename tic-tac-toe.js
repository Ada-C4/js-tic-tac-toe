//click handler
//checks to see if square is empty first
//if I do apply more styling to tds, would need to change this logic
$("td").click(function () {
  if (this.classList.length == 0) {
    tictac.takeTurn(this);
  }
});


////////////////////////////////

//game logic
function TicTacToe () {
};

//start game
TicTacToe.prototype.begin = function(){
  this.updateBoard([[0,0,0], [0,0,0],[0,0,0]]);
  this.updatePlayer("trooper");
};


//logic for a single turn
TicTacToe.prototype.takeTurn = function(clickedSquare){
  var coords = this.getCoords(clickedSquare);
  var newArray = this.markArray(coords);
  this.updateBoard(newArray);
  this.markSquare(clickedSquare);
  var winner = this.checkGame();
  if (winner != false){
    this.endGame(winner);
  } else {
    this.changePlayer();
  }
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
  // return "vader";
  return false;

};

//changes display when the game is over
TicTacToe.prototype.endGame = function (winner) {
  console.log(winner + "wins!");
};

//checks to see if that spot is occupied
//changes the array contents based on square that was clicked
//returns array that can be used to update the board
//board is marked with player name
TicTacToe.prototype.markArray = function(coords) {
  var board = this.currentBoard;
  var row = coords["row"];
  var col = coords["col"];
  if (board[row][col] == 0) {
    board[row][col] = this.currentPlayer;
  }
  return board;
};

//alternates player
TicTacToe.prototype.changePlayer = function() {
  if (this.currentPlayer == "trooper") {
    this.updatePlayer("vader");
  } else if (this.currentPlayer == "vader") {
    this.updatePlayer("trooper");
  }
};

//actually marks the square in the browser
TicTacToe.prototype.markSquare = function(square) {
    square.setAttribute("class", this.currentPlayer);
};
