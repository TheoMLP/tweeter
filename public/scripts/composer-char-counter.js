$(document).ready(function() {
  $('#downBtn').hide()

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

  $(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
      $('#downBtn').fadeIn('100');
      $('#navBtn').fadeOut('100');
    } else {
      $('#downBtn').fadeOut('100');
      $('#navBtn').fadeIn('100');
    }
  });

  $('#downBtn').on('click', function() {
    $('body, html').animate({scrollTop: 0}, '300');
    $('#form').slideDown();
    $('textarea').focus();
  })
});