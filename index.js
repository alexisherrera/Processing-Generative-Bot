var Twit = require('twit');
var config = require('./config');

//access keys from config file to protect keys
var T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret
});

var params = {
  q: 'hype',
  count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  //console.log(data.statuses)
}

var tweet = {
  status: 'hey'
}
