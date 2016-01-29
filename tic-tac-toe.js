var turn = 0;
var icon = 'X';
var player = 'Player 1';
var boardState = new TicTacToe();
//var playGame = boardState.markBoard;

function TicTacToe() {
  this.board = ["cell 0", "cell 1","cell 2","cell 3","cell 4","cell 5","cell 6","cell 7","cell 8"];
}



TicTacToe.prototype.getBoard = function() {
  return this.board;
};

//TicTacToe.prototype.markBoard = function() {
$("td").bind("click", function() {
  if (turn%2 === 0){
    var index = 0;
      for (index = 0; index < boardState.board.length; index ++){
        if (boardState.board[index] === this.className){
        //  alert(boardState.board[index] + "  =  " + this.className + "  YAY");
          $(this).addClass("x-clicked");
          boardState.board[index] = "x";
          turn = turn + 1;
        }
      }
  }else{
    var index = 0;
    for (index = 0; index < boardState.board.length; index ++){
      if (boardState.board[index] === this.className){
        //alert(boardState.board[index] + "  =  " + this.className + "  YAY");
        $(this).addClass("o-clicked");
        boardState.board[index] = "o";
        turn = turn + 1;
      }
    }
  }
  if (boardState.board[1]===boardState.board[2]&&boardState.board[0]===boardState.board[1]){
    alert("Player " + boardState.board[0] + " + has won!");
  }else if(boardState.board[3]===boardState.board[4]&&boardState.board[5]===boardState.board[3]){
    alert("Player " + boardState.board[3] + " + has won!");
  }else if(boardState.board[6]===boardState.board[7]&&boardState.board[8]===boardState.board[6]){
    alert("Player " + boardState.board[6] + " + has won!");
  }else if(boardState.board[0]===boardState.board[3]&&boardState.board[0]===boardState.board[6]){
    alert("Player " + boardState.board[6] + " + has won!");
  }else if(boardState.board[1]===boardState.board[4]&&boardState.board[7]===boardState.board[1]){
    alert("Player " + boardState.board[1] + " + has won!");
  }else if(boardState.board[2]===boardState.board[5]&&boardState.board[8]===boardState.board[2]){
    alert("Player " + boardState.board[2] + " + has won!");
  }else if(boardState.board[2]===boardState.board[4]&&boardState.board[6]===boardState.board[2]){
    alert("Player " + boardState.board[2] + " + has won!");
  }else if(boardState.board[0]===boardState.board[4]&&boardState.board[8]===boardState.board[0]){
    alert("Player " + boardState.board[0] + " + has won!");
  }
});
//};
