var Twit = require('twit');

module.exports = function tweet(tweetData, twitObj) {
  twitObj.post('statuses/update', tweetData, tweeted);

  function tweeted(err, data, response) {
    console.log('We just tweeted!')
    console.log(data)
  }
}
