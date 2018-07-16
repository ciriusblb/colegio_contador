'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getEnlaces : function(callback){
		if (connection) {
			var sql = `select * from h_enlace`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					// console.log("row ", row);
					callback(null,row);
				}
			});
		}
	}
};

module.exports = dataModels

