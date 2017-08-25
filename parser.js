var csv = require('csv-parser')
var fs = require('fs')

//function to retrieve data and do something useful with it
function getData(callback) {
	var objectIDData = []
	 
	var readable = fs.createReadStream('MetObjects.csv')
	readable.pipe(csv()).on('data', function (data) {
	    objectIDData.push( {
	    	object_ID: data['Object ID'],
	    	title: data['Title'],
	    	artist: data['Artist Display Name'],
	    	link: data['Link Resource'],
	    	publicDomain: data['Is Public Domain']
	    })
	  })
	//after we have loaded all the rele
	readable.on('end', function() {
		callback(objectIDData)
	})
}

module.exports = getData

  