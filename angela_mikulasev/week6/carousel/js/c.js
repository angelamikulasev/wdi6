$(document).ready(function() {
  // width gets current width for first element in a set of matched elements - can also set width
  var width = $('#carousel').width();
  var rightMargin;

  var forward = function() {
    $('#carousel').css({right: '-=612px' });
  }
  var backward = function() {
    $('#carousel').css({right: '+=612px'});
  }

  // to go forward appendTo
  $('#next').on('click', function(){
    rightMargin = Math.abs(parseInt($('#carousel').css('right')));

    prevImg = (width - 612)
    if (rightMargin >= prevImg) {
      $('#carousel').find('img:first').appendTo($('#carousel'));
    } else {
      forward();
    }
  });

  // to go back prependTo
  $('#previous').on('click', function() {
    rightMargin = parseInt($('#carousel').css('right'));

    if (rightMargin >= 0) {
      $('#carousel').find('img:last').prependTo($('#carousel'));
      $('#carousel').css('right', -612);
    } else {
      backward();
    }
  });
});