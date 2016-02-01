
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
  player: 1,

  pickSpaces: function(){
    var self = this;
    $("#player-1-wins").html(this.player_1_wins);
    $("#player-2-wins").html(this.player_2_wins);
    self.board_spaces.forEach(function(box) {
      $("." + box).click(function() {
        if ($("." + box).css('background-color') == 'rgb(0, 0, 255)') {
          self.markSpaces(self.player, box);
        }
        if (self.moves == 9) {
          alert("It's a tie!");
          self.resetBoard();
        }
      });
    });
  },

  markSpaces: function(player, box) {
    var color = (player == 1 ? 'red' : 'yellow');
    $("." + box).css('background-color', color);
    this.moves++;
    this.updateScore(box, player);
    this.player = (player == 1 ? 2 : 1);
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

  incrementScore: function(index, player) {
    var self = this;
    if (player == 1) {
      self.player_1_score[index]++;
      if (self.player_1_score[index] == 3) {
        self.playerWin(1);
      }
    } else {
      self.player_2_score[index]++;
      if (self.player_2_score[index] == 3) {
        self.playerWin(2);
      }
    }
  },

  playerWin: function(player) {
    alert("Player " + player + " wins!");
    this.resetBoard();
    this.trackWins(player);
  },

  updateScore: function(space, player) {
    var track_space = space.toString();
    var self = this;
    if(track_space.substring(0,2) == "r1") {
      self.incrementScore(0, player);
    } else if (track_space.substring(0,2) == "r2") {
      self.incrementScore(1, player);
    } else if (track_space.substring(0,2) == "r3") {
      self.incrementScore(2, player);
    }
    if (track_space.substring(2,4) == "c1") {
      self.incrementScore(3, player);
    } else if (track_space.substring(2,4) == "c2") {
      self.incrementScore(4, player);
    } else if (track_space.substring(2,4) == "c3") {
      self.incrementScore(5, player);
    }
    if (["r1c1", "r2c2", "r3c3"].includes(track_space)) {
      self.incrementScore(6, player);
    }
    if (["r1c3", "r2c2", "r3c1"].includes(track_space)) {
      self.incrementScore(7, player);
    }
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
