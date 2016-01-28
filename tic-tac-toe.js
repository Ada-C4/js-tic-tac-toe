function TicTacToe() {
  this.addMarker();
}

// TicTacToe.prototype.play = function() {
//   addMarker();
// };

TicTacToe.prototype = {
  currentPlayer: 0,
  board: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"],
  changePlayer: function () {
       this.currentPlayer = this.currentPlayer ? 0 : 1;
     },

  addMarker: function() {
    this.board.forEach(function(cell) {
      $("#" + cell).click(function(){
        if (this.currentPlayer === 0) {
        $("#" + cell).append('X');
        changePlayer();
      } else {
        $("#" + cell).append('O');
        changePlayer();
      }
      });
    });
  },

  play: function() {
    addMarker();
  }
};

// function addMarker(playerMarker){
//   $("#r1c1").click(function(){
//     $("#r1c1").append(playerMarker);
//   });
// }

// setSymbol = function () {
//   var currentSymbol = currentPlayer ? 'X' : 'O';
// };
