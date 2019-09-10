$(document).ready(function() {

  $("#textBar").on('input', function() {
    const maxCount = 140
    let inputLength = $(this).val().length
    $(this).nextAll('.counter').text(maxCount - inputLength)
    if (inputLength > 140) {
      $(this).nextAll('.counter').css("color", "red");
    } else {
      $(this).nextAll('.counter').css("color", "black");
    }
  });

});


// $("#textBar").on('chance', function(event) {
//   console.log('chance')
// });
// $(".container form").on('keydown', function(event) {
//   console.log('keydown')
// });

// $().on('keyup', function(event) {
//   console.log('keyup')
// });

// $(".container form").on('blue', function(event) {
//   console.log('blur')
// });
