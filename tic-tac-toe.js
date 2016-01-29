function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.player =
  this.gameOver = false;
}

TicTacToe.prototype.checkGameOver =function() {
  var winConditions = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [6,4,2]];
};


// DRY this code up
// This adds stuff into each
$(".square").on("click", function() {
    if(this.innerText == ""){
      $(this).append("x");
    };
  });
