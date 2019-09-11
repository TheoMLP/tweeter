/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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

  //creates header, append div containing avatar & username and appends handler
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

//shorthand of document ready method
$(() => {
  renderTweets(data)
});

