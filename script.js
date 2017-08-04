$(document).ready(function() {
  function createGrid(number) {
    for (var i = 0; i < number;i++) {
      var newRow = $('<div class = "row"></div>');
      $('#container').append(newRow);
    }
    for (var c = 0; c < number; c++) {
      var newColumn = $('<div class = "column"></div>');
      $('.row').append(newColumn);
    }
  }
  var currentSize = 16;
  createGrid(currentSize);


  var pSize = $('.column').outerHeight();

  function newGrid(newNum) {
    $('.row').remove();
    createGrid(newNum);
    $('.column').outerHeight(oldSize*oldPixel/newNum);
    $('.column').outerWidth(oldSize*oldPixel/newSize);
  }

  function clearGrid() {
    $('.column').css('background-color', '#f2f2f2');
    $('div').off();
  }

  $('div').on('mouseenter', '.column', function() {
    $(this).css('background-color', '#c6e2ff');
  })

  $('#sizeButton').on('click', function() {
    var newColumn = prompt("Pick a number between 1 and 64");
    if (newColumn == null) {
      return;
    }
    else if (newColumn == "") {
      return;
    }
    else {
      newGrid(newClumn);
    }
  })
});
