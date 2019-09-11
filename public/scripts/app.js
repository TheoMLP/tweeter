/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//loops through the database and extract each object to fill the tweets info

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet)
    $(".container").append($tweet)
  }
}

//creating each tweet using the info from the database

const createTweetElement = function(tweetData) {
  //create tweet article
  let $tweet = $('<article>').addClass('tweet');

  //creates and appends header, containing div (avatar & username) and handler
  let $header = $("<header>");
  let $headerDiv = $("<div>");
  $('<img>')
    .attr('src', tweetData["user"]["avatars"])
    .appendTo($headerDiv);
  $('<p>')
    .text(tweetData["user"]["name"])
    .appendTo($headerDiv);
  $header.append($headerDiv);

  $('<p>')
    .addClass('username')
    .text(tweetData["user"]["handle"])
    .appendTo($header)

  //append header to tweet article
  $tweet.append($header);

  //creates and appends content div and main text
  let $content = $("<div>");
  $('<p>')
    .text(tweetData["content"]["text"])
    .appendTo($content);
  $tweet.append($content);

  //creates footer appended to the tweet article
  let $footer = $("<footer>");
  $('<p>')
    .text(new Date(tweetData["created_at"]).toDateString())
    .appendTo($footer);
  $('<p>')
    .text('like')
    .addClass('interaction')
    .appendTo($footer);
  $tweet.append($footer);

  return $tweet;
}

// Ajax post request when posting a new tweet
const ajaxPostRequest = (url, method, data) => {
  console.log('Starting ajax call')
  $.ajax({url, method, data})
    .then(response => {
      console.log('worked')
    })
    .fail(err => {
      console.log(err)
    })
    .always(() => {
      console.log('Completed')
    });
}

const loadTweets = (url, method) => {
  $.ajax({url, method})
    .then(tweets => {
      renderTweets(tweets)
    })
    .fail(err => {
      console.log(err)
    })
}

//shorthand of document ready method
$(() => {
  $('#form').on('submit', function(event) {
    event.preventDefault();
    tweet = $(this).serialize();
    ajaxPostRequest('/tweets', 'POST', tweet);
  })

  loadTweets("/tweets", "GET")
});

