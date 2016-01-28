function TicTacToe() {
  this.boardTiles = [["row-0-col-0", "row-0-col-1", "row-0-col-2"], ["row-1-col-0", "row-1-col-1", "row-1-col-2"], [["row-2-col-0", "row-2-col-1", "row-2-col-2"]]];
}

TicTacToe.prototype = {
  this.boardTiles.forEach( function(tile) {
    $('.' + tile).click( function() {
      console.log(title + " wow");
    });
  });
};
