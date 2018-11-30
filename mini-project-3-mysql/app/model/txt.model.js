module.exports = (sequelize, Sequelize) => {
	const Text = sequelize.define('text', {
	  type: {
		type: Sequelize.STRING
	  },
	  name: {
		type: Sequelize.STRING
	  },
	  data: {
		type: Sequelize.BLOB('long')
	  }
	});
	
	return Text;
}