'use strict'

var Config = (function(){
	var SECRET_TOKEN = 'ciroselacome'
	return {
		getClave : function(){
			return SECRET_TOKEN
		}
	}
}())

var secret = Config.getClave()

module.exports = secret

