var fs = require('fs');
 
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
const Image = require('./app/model/img.model.js');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
	
	// empty the collection
    Image.remove(err => {
		if (err) throw err;
		console.log("Removed all documents in 'images' collection.");
		var imageData = fs.readFileSync(__dirname + '/static/assets/images/img001.jpg');
		// Create an Image instance
		const image = new Image({
			type: 'image/jpg',
			data: imageData
		});
 
	    // Store the Image to the MongoDB
		image.save()
		.then(img => {
			console.log("Saved an image 'img001.jpg' to MongoDB.");
			// Find the stored image in MongoDB, then save it in '/static/assets/tmp' folder
			Image.findById(img, (err, findOutImage) => {
				if (err) throw err;
				try{
					fs.writeFileSync(__dirname + '/static/assets/tmp/img001.jpg', findOutImage.data);
					console.log("Stored an image 'img001.jpg' in '/static/assets/tmp/' folder.");
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