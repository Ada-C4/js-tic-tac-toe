//click handler
  $("td").click(function () {
    var rowInd = (this.parentNode).rowIndex;
    var colInd = this.cellIndex;
    var coordinates = {row: rowInd, col: colInd}; //returns coordinates in a hash
    //want to change the appearance of the square and return the coordinates for updating the board
    tictac.markSquare(this);
    tictac.markArray(coordinates);
    tictac.changePlayer;
  });


//game logic
//
function TicTacToe () {
};

TicTacToe.prototype.player = function(nextPlayer){
  this.currentPlayer = nextPlayer;
};

TicTacToe.prototype.begin = function(){
  this.board = [[0,0,0], [0,0,0],[0,0,0]];
  this.player("trooper");
  console.log(this.board);
  //set up everything for a new game, if needed
};

TicTacToe.prototype.gamePlay = function(){
  console.log("gameplay has begun");
  //start turn taking, check to see what's up with board, etc
  //check to see if game is over, etc
};

//changes the array contents based on square that was clicked
TicTacToe.prototype.markArray = function(coordinates) {
  console.log(coordinates);

  };

//alternates player
TicTacToe.prototype.changePlayer = function() {
  if (this.currentPlayer == "trooper") {
    this.player("vader");
  } else if  (this.currentPlayer == "vader") {
    this.player("trooper");
  }
}

//actually marks the square in the browser
TicTacToe.prototype.markSquare = function(square) {
  square.setAttribute("class", this.currentPlayer);
  };
