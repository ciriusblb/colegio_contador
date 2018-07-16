'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getDecanos : function(callback){
		if (connection) {
			var sql = `select * from h_decano`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getDecanos : function(callback){
		if (connection) {
			var sql = `select * from h_decano`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getId_Decano : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_decano';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					if(!row[0].id){
						row[0].id=0;
					}
					console.log('row[0].id ',row[0].id)
					callback(null,row[0].id);
				}
			});
		}
	},
	A_saveDecano : function (data,callback){
		if(connection){
			console.log(data);
			var sql = 'insert into h_decano(nombre,decano,mandato) values('+
			connection.escape(data.nombre)+','+
			connection.escape(data.decano0)+','+
			connection.escape(data.mandato)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId,decano:data.decano0});
				}
			});
		}
	},
	A_editDecano : function (data,callback){
		if(connection){
			var sql = 'update h_decano set nombre ='+
			connection.escape(data.nombre)+', decano = '+
			connection.escape(data.decano)+', mandato = '+
			connection.escape(data.mandato)+' where  id = '+connection.escape(data.id);

			connection.query(sql, function(error,row){
				if (error) throw error
				else{

					callback(null,{decano:data.decano});
				}
			});
		}
	},
	A_deleteDecano : function(data,callback){
		if(connection){
			console.log(data);
			var sql = 'delete from h_decano where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},
};

module.exports = dataModels

