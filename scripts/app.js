$(document).ready(function() {

  console.log('JS is loaded!');

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

  $reset = $('#reset');
  $player = $('.player');
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
      var pos = $("#p1").position();
      $("#p1").css('left', pos.left + offset);
      } else if(e.keyCode == '80') {
      var pos = $("#p2").position();
        $("#p2").css('left',pos.left + offset);
      }

      // player reaches finish line
  if ($player.offset().left >= $('#tracks').width() - $player.width()) {
    var winner = document.getElementById('.player');
    executeWin();
  }

    $reset.on('click', function() {
     race();
   });
});
});
