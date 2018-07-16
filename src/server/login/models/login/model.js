'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	logueo : function(data,callback){
		if (connection) {
			var sql = `select * from h_administrador where usuario = `+connection.escape(data.usuario)+
			`and contrasena = `+connection.escape(data.contrasena);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row[0]);
				}
			});
		}
	}
};

module.exports = dataModels

