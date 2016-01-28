//click handler
  $("td").click(function () {
    var rowInd = (this.parentNode).rowIndex;
    var colInd = this.cellIndex;
    var coordinates = [rowInd, colInd];
    tictac.markSquare(coordinates);
  });


//game logic
function TicTacToe () {
};

TicTacToe.prototype.begin = function(){
  this.board = [[0,0,0], [0,0,0],[0,0,0]];
  console.log(this.board);
  //set up everything for a new game, if needed
};

TicTacToe.prototype.gamePlay = function(){
  console.log("gameplay has begun");
  //start turn taking, check to see what's up with board, etc
  //check to see if game is over, etc
};

//changes the array contents based on square that was clicked
TicTacToe.prototype.markSquare = function(coordinates) {
    console.log(coordinates);
    };






    //

    // this.endgame = fu
    // nction () {
    //   //ends the game
    // };
    //
    // this.gameover = function () {
    //   //checks to see if the game is over
    //   //calls endgame if it is
    // };
    //
    // this.finalDisplay = function () {
    //   //the game has ended, and endgame calls this method to
    //   //show a message at the end
    // };
    //
