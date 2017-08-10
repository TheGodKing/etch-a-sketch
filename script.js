function createBox(size) {
  var boxSize = 520/size; //1000px is the height and width of the box, boxSize just divides it so that the cells can be a certain size so that they fit in

  $('#wrapper').empty(); //Makes sure the box is clear

  for (var i = 1; i <= size*size; i++) {
    $('#wrapper').append('<div class = "cell"></div>');
  }

  $('.cell').width(boxSize);
  $('.cell').height(boxSize);

  $('.cell').mouseenter(function() {
    $(this).addClass('filled');
  });
}

$(document).ready(function () {
  createBox(16);

  $('#reset').click(function() {
    $('.cell').removeClass('filled');
    var newSize = prompt('What size do you want now?');
    createBox(newSize);
  });

});
