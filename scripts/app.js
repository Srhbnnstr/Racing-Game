$(document).ready(function() {

  console.log('JS is loaded!');

  $reset = $('#reset');

  //reset player position
  var race= function() {
    $('#player1').css({left: 0});
    $('#player2').css({left: 0});
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

    $reset.on('click', function() {
     race();
   });
});
});
