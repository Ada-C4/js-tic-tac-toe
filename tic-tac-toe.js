function TicTacToe() {
  // this.board = [[0,0,0],[0,0,0],[0,0,0]];
  this.clickSpace();
}

// TicTacToe.prototype.checkGameOver =function() {
//   var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [6,4,2]];
// };

// reset board


TicTacToe.prototype = {
 drawMark: function(player){
   return player == 1 ? '🍍' : '🌺';
 },

//check every square - if they are all filled, then do alert/game over TicTacToe
 checkForTie: function() {
   var filled = 0;
   $(".square").each(function(){
     debugger;
     if(this.innerText == ""){
       filled++;
     }
   });
   if (filled == 0){
     alert("Game Over - It's a tie!");
   }
 },

 clickSpace: function() {
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
   }

};
