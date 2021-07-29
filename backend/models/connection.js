let mongoose = require('mongoose');

let options = {
	connectTimeoutMS: 5000,
	useUnifiedTopology: true,
	useNewUrlParser: true
}

mongoose.connect('mongodb+srv://MewenDEV:MeYendze_06_06_96@learningdevcluster.pe4fm.mongodb.net/KeyDoPerso?retryWrites=true&w=majority',
	options,
	function(err){
		if(err) {
			console.log(err)
		} else {
			console.log('*** DB CONNECTED ***');
		}
	}
);

module.exports = mongoose;