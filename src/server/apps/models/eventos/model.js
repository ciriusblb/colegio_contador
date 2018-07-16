'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getEventos : function(callback){
		if (connection) {
			var sql = `select * from h_evento`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					console.log(row);
					callback(null,row);
				}
			});
		}
	},
	getEvento : function(data,callback){
		if (connection) {
			var sql = `select * from h_ponente where id_evento=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var ponentes= row;
					var sql = `select * from h_evento where id =`+connection.escape(data.id);
					connection.query(sql, function(error,row){
						if (error) throw error
						else{
							row[0].ponentes=ponentes;
							console.log(row[0]);
							callback(null,row[0]);
						}
					});
				}
			})
		}
	},
	A_getEventos : function(callback){
		if (connection) {
			var sql = `select * from h_evento`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getEvento : function(data,callback){
		if (connection) {
			var sql = `select * from h_ponente where id_evento=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var ponentes= row;
					var sql = `select * from h_evento where id =`+connection.escape(data.id);
					connection.query(sql, function(error,row){
						if (error) throw error
						else{
							row[0].ponentes=ponentes;
							console.log(row[0]);
							callback(null,row[0]);
						}
					});
				}
			})
		}
	},
	getMiembros : function(callback){
		if (connection) {
			var sql = `select * from h_miembro`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	getIds : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_evento';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					var id1=row[0].id;
					var sql = 'SELECT MAX(id) AS id FROM h_ponente';
					connection.query(sql, function(error,row){
						if (error) throw error
						else{
							var id2=row[0].id;
							callback(null,Math.max(id1,id2));
						}
					});
				}
			});
		}
	},
	A_saveEvento : function(data,callback){
		if(connection){
			var sql = 'insert into h_evento(titulo,lugar,fecha,hora,inscripcion,descripcion,cuenta,preEvento,evento) values('+
			connection.escape(data.titulo)+','+
			connection.escape(data.lugar)+','+
			connection.escape(data.fecha)+','+
			connection.escape(data.hora)+','+
			connection.escape(data.inscripcion)+','+
			connection.escape(data.descripcion)+','+
			connection.escape(data.cuenta0)+','+
			connection.escape(data.preEvento0)+','+
			connection.escape(data.evento0)+')';
			connection.query(sql, function(error, row) 
			{
				if(error)throw error;
				else{
					var id = row.insertId;
					var sql='';
					for (var i = 0; i < data.cantidadPonentes; i++) {
					    sql = sql+'('+connection.escape(data['nombre'+i])+','
					    +connection.escape(data['especialidad'+i])+','
					    +connection.escape(data['ponente'+i])+','+connection.escape(id)+')';
						if(i<data.cantidadPonentes-1){
							sql=sql+',';
						}
					}
					sql = 'insert into h_ponente(nombre,especialidad,ponente,id_evento) values'+sql;
					connection.query(sql,function(error,row){
						if(error) throw error;
						else{
							callback(null, {id:id});
						}
					})
				}
			});
		}
	},
	A_editEvento : function(data,callback){
		if(connection){
			var sql='update h_evento set titulo='+
			connection.escape(data.titulo)+', lugar='+
			connection.escape(data.lugar)+', fecha='+
			connection.escape(data.fecha)+', hora='+
			connection.escape(data.hora)+', inscripcion='+
			connection.escape(data.inscripcion)+', descripcion='+
			connection.escape(data.descripcion)+', cuenta='+
			connection.escape(data.cuenta)+', preEvento='+
			connection.escape(data.preEvento)+', evento='+
			connection.escape(data.evento)+' where id='+
			connection.escape(data.id);

			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					for (var i = 0; i < data.cantidadPonentes; i++) {
						var sql = 'call spEditPonente('+connection.escape(data['nombre'+i])+','+
						connection.escape(data['especialidad'+i])+','+
						connection.escape(data['ponente'+i])+','+
						connection.escape(data['id'])+','+
						connection.escape(data['id'+i])+','+
						connection.escape(data['agregar'+i])+')';

						connection.query(sql,function(error,row){
							if(error) throw error;
						})
					}
					if(data.eliminarId){
						var eliminados=data.eliminarId.split(',');
						for (var i = 0; i < eliminados.length; i++) {
							var sql = 'delete from h_ponente where id='+connection.escape(eliminados[i]);
							console.log("sel ",sql),
							connection.query(sql,function(error,row){
								if(error) throw error;
							})
						}	
					}

					callback(null, {mdg:'editado correctamente'});
				}
			})
		}
	},
	A_deleteEvento : function(data,callback){
		if(connection){
			var sql = 'delete from h_evento where id='+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var eliminados=data.eliminados.split(',');
					for (var i = 0; i < eliminados.length; i++) {
						var sql = 'delete from h_ponente where id='+connection.escape(eliminados[i]);
						connection.query(sql,function(error,row){
							if(error) throw error;
						})
					}
					callback(null,{msg:'eliminados correctamente'});
				}
			})
		}
	}
};

module.exports = dataModels
