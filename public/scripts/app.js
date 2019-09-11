/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $("article.tweet").hover(
    function () {
      $(this).css("box-shadow", "10px 10px 5px #B0C4DE")
      $(this).find(".username").css("color", "blue")
    }, function () {
      $(this).css("box-shadow", "0px 0px")
      $(this).find(".username").css("color", "#f4f1ec")
    })
});

