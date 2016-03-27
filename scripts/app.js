$(document).ready(function() {

  console.log('JS is loaded!');

  $reset = $('#reset');

  $('body').keydown(function(e) {
    var offset = 8.5;
      if(e.keyCode == '65') {
        var pos = $("#player1").position();
      $("#player1").css('left', pos.left + offset);
      } else if(e.keyCode == '80') {
        var pos = $("#player2").position();
        $("#player2").css('left',pos.left + offset);
      }
  });


});
