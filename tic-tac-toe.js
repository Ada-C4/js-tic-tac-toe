var TicTacToe = function() {
  this.turn = 0;
  this.board = ["", "spot 1", "spot 2", "spot 3", "spot 4", "spot 5", "spot 6", "spot 7", "spot 8"]
}

  TicTacToe.prototype.dawg = function(cell){

      if(this.turn % 2 == 0){
        $(cell).addClass("purple-rain");
      } else {
        $(cell).addClass("golden-gardens");
      }
      this.turn = this.turn + 1;
    }

  TicTacToe.prototype.



  function checkForWin(){

  }

// $("td").bind("click", function() {
//   // alert(this.className)
//   this.toggleClass("purple-rain");
// });

function changeColor(event) {
      document.body.style.color = "purple";
      return false;
  }

TicTacToe.prototype.playGame = function(){


}
