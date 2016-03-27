$(document).ready(function() {

  console.log('JS is loaded!');

  $reset = $('#reset');
  $player = $('#player1, #player2');
  var winner = null;

//resets game
  var race= function() {
    $player.css({left: 0});
  };

  var executeWin = function() {
    alert("Well done.");
    race();
  };

 //assigns keycode to each player, moves player with correct keypress
  $('body').keydown(function(e) {
    var offset = 10;
      if(e.keyCode == '65') {
      var pos = $("#player1").position();
      $("#player1").css('left', pos.left + offset);
      } else if(e.keyCode == '80') {
      var pos = $("#player2").position();
        $("#player2").css('left',pos.left + offset);
      }

      // player reaches finish line
  if ('#player1' || '#player2'.offset().left >= $('#tracks').width() - $player.width()) {
    var winner = $player;
    executeWin();
  }

    $reset.on('click', function() {
     race();
   });
});
});
