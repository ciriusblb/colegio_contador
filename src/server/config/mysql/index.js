'use strict';

var Connection = (function(){
	var mysql = require('mysql'),
		config = require('./mysqlModel'),
		dataBase = {
		   host: config.mysql.host,
		   user: config.mysql.user,
		   password: config.mysql.password,
		   database: config.mysql.database,
		   port: config.mysql.port		
		},
		connection = mysql.createConnection(dataBase)

		return {
			getConnection: function(){
				return connection
			}
		}
}())

var conexion = Connection.getConnection()

conexion.connect((err)=>{
	return (err) ? console.log(`error al conectar a la base de datos ${err.stack}`):console.log(`conexion establecida con mysql : ${conexion.threadId}`)
})


module.exports = conexion

