var turn = 0;
var icon = 'X';
var player = 'Player 1';

function TicTacToe() {
  this.board = [[""], ["","",""], ["","",""]];
//  "td"."cell 0"= board[0][0];
}

TicTacToe.prototype = {

};

$("td").bind("click", function(){
  if (turn%2 === 0){
    $(this).addClass("x-clicked");
    turn = turn + 1;
  }else{
    $(this).addClass("o-clicked");
    turn = turn + 1;
  }
});
