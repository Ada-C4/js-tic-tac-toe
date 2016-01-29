function TicTacToe() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.gameOver = false;
  this.play = 1;
  this.player = 1;
  this.clickSpace();
}


// TicTacToe.prototype.checkGameOver =function() {
//   var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [6,4,2]];
// };

// merge these later like this
//TicTacToe.prototype ={
//  drawMark: function(){
//
//  };
// },

// reset board


TicTacToe.prototype.drawMark =function(player) {
  // var player = player || 1;
  // if ( player == 1){
  //   player = 2;
  // } else {
  //   player = 1;
  // }
  // console.log(player)
  return player == 1 ? 'X' : 'O';
};

//check every square - if they are all filled, then do alert/game over TicTacToe
TicTacToe.prototype.checkForTie =function() {
  var filled = 0;
  $(".square").each(function(){
    if(this.innerText == ""){
      filled++;
    }
  });
  if (filled == 0){
    alert("Game Over - It's a tie!");
  }
};

TicTacToe.prototype.clickSpace =function() {
  var self = this;
  var player = player || 1;
  $(".square").on("click", function() {
      if(this.innerText == ""){
        $(this).append(self.drawMark(player));
        if ( player == 1){
          player = 2;
        } else {
          player = 1;
        }
      };
      self.checkForTie();
    });
  };
