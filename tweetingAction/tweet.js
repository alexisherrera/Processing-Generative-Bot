var Twit = require('twit');

var tweetF = function(tweetData, twitObj) {
  twitObj.post('media/upload', tweetData, tweetedIMG);

  //function to actually tweet after uploaded to twitter
  function tweetedIMG(err, data, response) {
    if (err) {
      console.log(err)
    }
    var imgID = data.media_id_string;
    console.log(imgID);
    console.log('We just tweeted!')
    console.log(data)
  }
}

module.exports = {
  tweet: tweetF
}
