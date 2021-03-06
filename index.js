var fs = require('fs');
var exec = require('child_process').exec;
var Twit = require('twit');
var commands = require('./config/processingCommands.js')
var config = require('./config/config.js');
var tweetF = require('./tweetingAction/tweet.js')

//access keys from config file to protect keys
var T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret
});
tweet();

//tweet every 20 minutes
setInterval(tweet, 1000 * 60 * 1)

function tweet() {
  exec(commands.simpleP, function() {
    var filename = 'processing/output.png'
    var parameters = {
      encoding: 'base64'
    }
    var content = fs.readFileSync(filename, parameters);

    var tweetData = {
      media_data: content
    }

    tweetF.tweet(tweetData, T)
  })
}
