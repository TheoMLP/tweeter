$(document).ready(function() {
  $("#textBar").on('keypress', function() {
    $(this).nextAll('.counter').text(String(140 - $(this).val().length))
  })
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
