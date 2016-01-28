var TicTacToe = function() {
 // initialize things when a new game starts
};


  TicTacToe.prototype.play = function() {
    $(".one").click(function() {
      $(this).html("<h1>X</h1>");
    });
  };
