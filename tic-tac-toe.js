//click handler
  $(".square").click(function () {
    var squareid = $(this).attr("id");
    tictac.markSquare(squareid);
  });


//game logic
function TicTacToe () {
};

TicTacToe.prototype.begin = function(){
  console.log("game has begun");
  this.board = [[0,0,0], [0,0,0],[0,0,0]];
  //set up everything for a new game, if needed
};

TicTacToe.prototype.gamePlay = function(){
  console.log("gameplay has begun");
  //start turn taking, check to see what's up with board, etc
  //check to see if game is over, etc
};


TicTacToe.prototype.markSquare = function(squareid) {
    console.log(this.board);
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
