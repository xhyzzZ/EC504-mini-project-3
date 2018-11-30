var fs = require('fs');
 
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
const Text = require('./app/model/txt.model.js');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
	
	// empty the collection
    Text.remove(err => {
		if (err) throw err;
		console.log("Removed all documents in 'texts' collection.");
		var textData = fs.readFileSync(__dirname + '/static/assets/texts/label.txt');
		// Create an Image instance
		const text = new Text({
			type: 'text/txt',
			data: textData
		});
 
	    // Store the Image to the MongoDB
		text.save()
		.then(txt => {
			console.log("Saved an text 'label.txt' to MongoDB.");
			// Find the stored image in MongoDB, then save it in '/static/assets/tmp' folder
			Text.findById(txt, (err, findOutText) => {
				if (err) throw err;
				try{
					fs.writeFileSync(__dirname + '/static/assets/tmp/label.txt', findOutText.data);
					console.log("Stored an text 'label.txt' in '/static/assets/tmp/' folder.");
					// exit node.js app
					console.log("Exit!");
					process.exit(0);
				}catch(e){
					console.log(e);
				}
			});
		}).catch(err => {
			console.log(err);
			throw err;
		});
	})
	
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});


// download mongoDB from offcial website, remane it to "mongo, "save it to /Users/username/
// for my computer, the path is /Users/kobale/mongo
// create "mongo-data" folder in the same path
// terminal run './mongod --dbpath ~/mongo-data'