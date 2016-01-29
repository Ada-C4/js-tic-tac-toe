
function TicTacToe() {
  this.pickSpaces();
  this.resetButton();
}

TicTacToe.prototype = {
  board_spaces: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"],
  player_1_score: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  player_2_score: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  player_1_wins: 0,
  player_2_wins: 0,
  moves: 0,

  pickSpaces: function(){
    var self = this;
    var player = 1;
    $("#player-1-wins").html(this.player_1_wins);
    $("#player-2-wins").html(this.player_2_wins);
    self.board_spaces.forEach(function(box) {
      $("." + box).click(function() {
        if ($("." + box).css('background-color') == 'rgb(0, 0, 255)') {
          if(player === 1){
            $("." + box).css('background-color', 'red');
            self.moves++;
            self.updateScore(box, player);
            player = 2;
          } else {
            $("." + box).css('background-color', 'yellow');
            self.moves++;
            self.updateScore(box, player);
            player = 1;
          }
        }
        if (self.moves == 9) {
          alert("It's a tie!");
          self.resetBoard();
        }
      });
    });
  },

  resetBoard: function(){
    this.board_spaces.forEach(function(box) {
      $("." + box).css('background-color', 'blue');
      $("." + box).off('click');
    });
    this.pickSpaces();
    this.player_1_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
    this.player_2_score = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
    this.moves = 0;
  },

  resetButton: function(){
    var self = this;
    $('#reset-button').click(function() {
      self.resetBoard();
    });
  },

  updateScore: function(space, player) {
    var self = this;
    if(space.substring(0,2) == "r1") {
      if (player === 1) {
        self.player_1_score[0]++;
      } else {
        self.player_2_score[0]++;
      }
    } else if (space.substring(0,2) == "r2") {
      if (player === 1) {
        self.player_1_score[1]++;
      } else {
        self.player_2_score[1]++;
      }
    } else if (space.substring(0,2) == "r3") {
      if (player === 1) {
        self.player_1_score[2]++;
      } else {
        self.player_2_score[2]++;
      }
    }
    if (space.substring(2,4) == "c1") {
      if (player === 1) {
        self.player_1_score[3]++;
      } else {
        self.player_2_score[3]++;
      }
    } else if (space.substring(2,4) == "c2") {
      if (player === 1) {
        self.player_1_score[4]++;
      } else {
        self.player_2_score[4]++;
      }
    } else if (space.substring(2,4) == "c3") {
      if (player === 1) {
        self.player_1_score[5]++;
      } else {
        self.player_2_score[5]++;
      }
    }
    if (["r1c1", "r2c2", "r3c3"].includes(space)) {
      if (player === 1) {
        self.player_1_score[6]++;
      } else {
        self.player_2_score[6]++;
      }
    }
    if (["r1c3", "r2c2", "r3c1"].includes(space)) {
      if (player === 1) {
        self.player_1_score[7]++;
      } else {
        self.player_2_score[7]++;
      }
    }
    if (self.moves >= 5) {
      self.checkForWinner();
    }
  },

  checkForWinner: function() {
    var self = this;
    self.player_1_score.forEach(function(score) {
      if (score == 3) {
        alert("Player 1 wins!");
        self.resetBoard();
        self.trackWins(1);
      }
    });
    self.player_2_score.forEach(function(score) {
      if (score == 3) {
        alert("Player 2 wins!");
        self.resetBoard();
        self.trackWins(2);
      }
    });
    // player_1_score = [ row1, row2, row3, col1, col2, col3, diagleft, diagright ]
    // player_2_score = [ row1, row2, row3, col1, col2, col3, diagleft, diagright ]
  },

  trackWins: function(player) {
    if (player == 1) {
      this.player_1_wins++;
      $("#player-1-wins").html(this.player_1_wins);
    } else {
      this.player_2_wins++;
      $("#player-2-wins").html(this.player_2_wins);
    }
  },
};
