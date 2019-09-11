/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
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

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet)
    $(".container").append($tweet)
  }
}

const createTweetElement = function(tweetData) {
  let $tweet = $('<article>').addClass('tweet')
  .append($("<header>")
     .append($("<div>")
        .append(`<img src="${tweetData["user"]["avatars"]}">`)
        .append(`<p>${tweetData["user"]["name"]}</p>`))
     .append($(`<p>${tweetData["user"]["handle"]}</p>`).addClass('username')))

  .append($("<div>")
       .append(`<p>${tweetData["content"]["text"]}</p>`))

  .append($("<footer>")
     .append(`<p>${new Date(tweetData["created_at"]).toDateString()}</p>`)
     .append($("<p>like</p>").addClass('interaction')))
  return $tweet
}

$(document).ready(function() {
  renderTweets(data)
});

