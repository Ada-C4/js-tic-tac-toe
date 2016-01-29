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
    });
  };
