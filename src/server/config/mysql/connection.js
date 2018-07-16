
function VerificationConeccion (){
	var connections = require('./index');
	this.value = connections
}

VerificationConeccion.prototype.getConnection = function(){
	return this.value
};

var connection = new VerificationConeccion()

module.exports = connection.getConnection()
