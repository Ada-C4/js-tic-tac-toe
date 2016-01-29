function TicTacToe() {
  // this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.clickSpace();
}

TicTacToe.prototype = {
  // check which player and return the appropriate mark
  drawMark: function(player){
    return player == 1 ? '🍍' : '🌺';
  },

  resetBoard: function(){
    $(".square").each(function(){
      this.innerText = "";
    });
  },

  // checkForWin: function(){
  //   if($("#r1c1".innerText))
  //   // var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [6,4,2]];
  // },

  //check every square - if they are all filled, then do alert/game over TicTacToe
  checkForTie: function() {
   var self = this;
   var filled = 0;
   $(".square").each(function(){
     if(this.innerText == ""){
       filled++;
     }
   });
   if (filled == 0){
     alert("Game Over - It's a tie!");
     self.resetBoard();
   }
  },

  // playing the game, what happens when you click each space
  clickSpace: function() {
   var self = this;
   var player = player || 1;
   $(".square").on("click", function() {
       if(this.innerText == ""){
         $(this).append(self.drawMark(player));
         // switch player
         player == 1? player = 2 : player = 1;
       };
       self.checkForTie();
     });
   }
};
