var Twit = require('twit');
var randomName = require('./randomName.js')

var tweetF = function(tweetData, twitObj) {
  console.log("here")
  console.log('twitOBJ', twitObj);
  twitObj.post('media/upload', tweetData, tweetedIMG);

  //function to actually tweet after uploaded to twitter
  function tweetedIMG(err, data, response) {
    if (err) {
      console.log(err)
    }

    var imgID = data.media_id_string;
    console.log(imgID);

    var imgName = randomName.randomName() + '.png';
    var tweetToPost = {
      status: imgName,
      media_ids: [imgID]
    }

    twitObj.post('statuses/update', tweetToPost, function(err, data, response) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('We just tweeted!')
    });
  }
}

module.exports = {
  tweet: tweetF
}
