/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//loops through the database and extract each object to fill the tweets infoxs
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet)
    $('#tweetSection').prepend($tweet)
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
const formValidation = (data) => {
  let errorMsg;
  if (!data) {
    errorMsg = "Cannot submit empty tweet"
  }
  if (data.length > 140) {
    errorMsg = "Cannot submit tweet over 140 characters"
  }
  return errorMsg
}

//submit an ajax request to add the tweet to the db async
const submitForm = (url, method, tweet) => {
  $.ajax({url, method, data: { text: tweet } })
    .then(() => {
      loadLastTweet('/tweets');
    })
    .fail(err => {
      console.log(err)
    })
}

//loads all the tweet async onto the page
const loadTweets = url => {
  $.ajax({url, method: 'GET'})
    .then(tweets => {
      renderTweets(tweets)
    })
    .fail(err => {
      console.log(err)
    })
}

//loads the newly submitted tweet onto the page
const loadLastTweet = url => {
  $.ajax({url, method: 'GET'})
    .then(tweets => {
      renderTweets([tweets[tweets.length - 1]])
    })
    .fail(err => {
      console.log(err)
    })
}

$(() => {
  //hides the initial error message
  $('.error').hide()

  $('#form').on('submit', function(event) {
    event.preventDefault();
    let tweet = $('#form textarea').val();

    const errorMsg = formValidation(tweet)
    //if there is an error toggles down the error message
    if (errorMsg) {
      $('.error').slideDown().text(errorMsg)

      //clicking anywhere on the body will toggle the errorMsg back up 
      $('body').on('click', function() {
        $('.error').slideUp()
        $('textarea').focus()
      })
    } else {
      submitForm('/tweets', 'POST', tweet);
    }
  })

  loadTweets("/tweets")

  $('#slideBtn').on('click', function() {
    $('#form').slideToggle()
    $('textarea').focus()
  })
});

