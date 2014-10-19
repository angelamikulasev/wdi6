$(document).ready(function(){
  var width = $('#carousel').width();
  var imgMargin;

  var forward = function () {
      $('#carousel').css({marginRight: '-=612px'});
  }

  var backward = function () {
      $('#carousel').css({marginRight: '+=612px'});
  }

  // to go forward appendTo --> Insert every element in the set of matched elements to the end of the target.
  $('#next').on('click', function(){
    imgMargin = Math.abs(parseInt($('#carousel').css('marginRight')));
    prevImgWidth = (width - 612)
    if(imgMargin >= prevImgWidth) {
      $('#carousel').find('img:first').appendTo($('#carousel'));
    } else {
      forward();
    }
  });

  // to go back prependTo --> Insert every element in the set of matched elements to the beginning of the target.
  $('#previous').on('click', function(){
    imgMargin = parseInt($('#carousel').css('marginRight'));
    if(imgMargin <= 0) {
      $('#carousel').find('img:last').prependTo($('#carousel'));
      $('#carousel').css('marginRight', -612);
    } else {
      backward();
    }
  });

});