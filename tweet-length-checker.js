//Tweet Length Checker 

// Write a twitter post and check how much words are written and how much are left
var tweet = prompt(" " );
var z =  tweet.length ;
var y = 140 - tweet.length;
 alert("you have written " + z + " words and you have " + y + " words remaining" );
var finalTweet = tweet.slice(0,140);
alert(finalTweet);