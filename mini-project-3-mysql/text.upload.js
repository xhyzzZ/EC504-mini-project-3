var fs = require('fs');
 
const db = require('./app/config/dbtext.config.js');
 
const Text = db.texts;
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  	//Give any image name here.
	var textData = fs.readFileSync(__dirname + '/static/assets/texts/label.txt');
	Text.create({
		type: 'txt',
		name: 'Label',
		data: textData
	}).then(text => {
		try{
			fs.writeFileSync(__dirname + '/static/assets/tmp/label.txt', text.data);		
			
			// exit node.js app
			process.exit(0);
		}catch(e){
			console.log(e);
		}
	})
});