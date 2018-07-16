'use strict'

var connection = require('../../../config/mysql/connection')



var dataModels = {
	sendUsername : (data,callback)=>{
		if (connection) {
			var sql = `select username from h_admin where username = ${connection.escape(data.username)}`;
			connection.query(sql,(error,row)=>{
				if (error) throw error
					console.log("este es el row1...",row[0])
					return (row[0]) ?  	callback(null,row[0]) : callback(null,{error:'error'})
			});
		}
	},
	sendPassword : (data,callback)=>{
		console.log("la contraseña en el model....",data)
		if (connection) {
			var sql = `select * from h_admin where username= ${connection.escape(data.username)} and password = ${connection.escape(data.password)}`;
			connection.query(sql,(error,row)=>{
				if (error) throw error
					console.log("este es el row2...",row)
				return (row[0]) ? callback(null,{confirm:'founded',user:row[0]}):callback(null,{confirm:'otherwise'})				
			});
				
		}
	}
}

module.exports = dataModels