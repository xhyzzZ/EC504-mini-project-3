var fs = require('fs');
 
const db = require('./app/config/dbimage.config.js');
 
const Image = db.images;
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  	//Give any image name here.
	var imageData = fs.readFileSync(__dirname + '/static/assets/images/img001.jpg');
	Image.create({
		type: 'jpg',
		name: 'Curry',
		data: imageData
	}).then(image => {
		try{
			fs.writeFileSync(__dirname + '/static/assets/tmp/img001.jpg', image.data);		
			
			// exit node.js app
			process.exit(0);
		}catch(e){
			console.log(e);
		}
	})
});