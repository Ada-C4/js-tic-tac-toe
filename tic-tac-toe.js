var turn = 0;
var icon = 'X';
var player = 'Player 1';
var boardState = new TicTacToe();

function TicTacToe() {
  this.board = ["cell 0", "cell 1","cell 2","cell 3","cell 4","cell 5","cell 6","cell 7","cell 8"];
}



TicTacToe.prototype.getBoard = function() {
  return this.board;
};


$("td").bind("click", function() {

    if (turn%2 === 0){
     //board.forEach(box);{
       //if(this === box){
        // box = "X";
       //}
       var index = 0;
       for (index = 0; index < boardState.board.length; index ++){
         if (boardState.board[index] === this.className){
           alert(boardState.board[index] + "  =  " + this.className + "  YAY");
           $(this).addClass("x-clicked");
         }
       }
     }

       //alert(this.className);}


    // $(this).addClass("x-clicked");
      turn = turn + 1;
  // }else{
    // $(this).addClass("o-clicked");
    // turn = turn + 1;
  // }
});
