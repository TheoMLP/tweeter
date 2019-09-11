$(document).ready(function() {
  $("#textBar").on('input', function() {
    const maxCount = 140
    let inputLength = $(this).val().length
    $(this).nextAll('.counter').text(maxCount - inputLength)
    if (inputLength > 140) {
      $(this).nextAll('.counter').css("color", "red");
    } else {
      $(this).nextAll('.counter').css("color", "#545149");
    }
  });
});