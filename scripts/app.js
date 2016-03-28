$(document).ready(function() {

  console.log('JS is loaded!');

   //Audio controls

  var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

  ctrl.onclick = function () {

    // Update the Button
  var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
  var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
  return false;
  };

    //global variables
  var $reset = $('#reset');
  var $player = $('.player');
  var winner= 'null';

    //resets game
  var race= function() {
    $player.css({left: 0});
  };

   //when a winner is determined
  var executeWin = function() {
    alert("Hot damn, " + winner + "! You win!" );
    race();
  };

   //assigns keycode to each player, moves player with correct keypress
  $('body').keydown(function(e) {
    var offset = 10;
      if(e.keyCode == '65') {
      var pos = $player.position();
      $("#p1").css('left', pos.left + offset);
    } else if(e.keyCode == '80') {
      var pos = $("#p2").position();
        $("#p2").css('left',pos.left + offset);
      }

    //determines a winner
    if ($("#p1").offset().left >= $('#tracks').width() - $player.width()) {
        winner = 'player 1';
        executeWin();
    } else if ($("#p2").offset().left >= $('#tracks').width() - $player.width()) {
        winner = 'player 2';
        executeWin();
        }

    //reset button
    $reset.on('click', function() {
     race();
   });
});
});
