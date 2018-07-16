'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getNormas : function(callback){
		if (connection) {
			var sql = `select * from h_normas_legales`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	getNosotros : function(callback){
		if (connection) {
			var sql = `select * from h_nosotros`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	getGaleria : function(callback){
		if (connection) {
			var sql = 'select * from h_imagenes';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var galerias= row;
					var sql = 'select * from h_galeria';
					connection.query(sql, function(error,row){
						if (error) throw error
						else{
						var categorias= row;
							for (var i = 0; i < categorias.length; i++) {
								categorias[i].galerias=[];					
								for (var j = 0; j < galerias.length; j++) {
									if(categorias[i].id==galerias[j].id_galeria){
										categorias[i].galerias.push(galerias[j]);
									}
								}
							}
							callback(null,categorias);
						}
					});
				}
			})
		}
	},




	A_getNormas : function(callback){
		if (connection) {
			var sql = `select * from h_normas_legales`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getIds : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_normas_legales';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row[0].id);
				}
			});
		}
	},
	A_saveNorma : function (data,callback){
		if(connection){
			var sql = 'insert into h_normas_legales(titulo,norma,nombre_archivo,fecha) values('+
			connection.escape(data.titulo)+','+
			connection.escape(data.norma0)+','+
			connection.escape(data.nombre_archivo)+','+
			connection.escape(data.fecha)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{

					callback(null,{id:row.insertId,norma:data.norma0});
				}
			});
		}
	},
	A_editNorma : function (data,callback){
		if(connection){
			var sql = 'update h_normas_legales set titulo ='+
			connection.escape(data.titulo)+', norma = '+
			connection.escape(data.norma)+', nombre_archivo = '+
			connection.escape(data.nombre_archivo)+', fecha = '+
			connection.escape(data.fecha)+' where  id = '+connection.escape(data.id);

			connection.query(sql, function(error,row){
				if (error) throw error
				else{

					callback(null,{norma:data.norma});
				}
			});
		}
	},
	A_deleteNorma : function(data,callback){
		if(connection){
			console.log(data);
			var sql = 'delete from h_normas_legales where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},

	A_getNosotros:function(callback){
		if(connection){
			var sql = `select * from h_nosotros`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_saveNosotro:function(data,callback){
		if(connection){
			var sql = `insert into h_nosotros(titulo,descripcion) values(`+
			connection.escape(data.titulo)+`,`+
			connection.escape(data.descripcion)+`)`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId});
				}
			});
		}
	},
	A_editNosotro:function(data,callback){
		if(connection){
			var sql = 'update h_nosotros set titulo = '+
			connection.escape(data.titulo)+', descripcion = '+
			connection.escape(data.descripcion)+' where id = '+connection.escape(data.id);
				connection.query(sql, function(error,row){
					if (error) throw error
					else{
						callback(null,{msg:'editado correctamente'});
					}
				});
		}
	},
	A_removeNosotro:function(data,callback){
		if(connection){
			var sql = 'delete from h_nosotros where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},
	A_getGaleria : function(callback){
		if (connection) {
			var sql = `select * from h_galeria`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					console.log("row ", row);
					
					callback(null,row);
				}
			});
		}
	},
	A_getIds_Galeria: function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_galeria';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					var id1=row[0].id;
					var sql = 'SELECT MAX(id) AS id FROM h_imagenes';
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
	A_getCategoria: function(data,callback){
		if (connection) {
			var sql = `select * from h_imagenes where id_galeria=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var galerias= row;
					var sql = `select * from h_galeria where id =`+connection.escape(data.id);
					connection.query(sql, function(error,row){
						if (error) throw error
						else{
							row[0].galerias=galerias;
							console.log(row[0]);
							callback(null,row[0]);
						}
					});
				}
			})
		}
	},
	A_saveCategoria : function(data,callback){
		if(connection){
			console.log("data ",data);
			var sql = 'insert into h_galeria(categoria) values('+
			connection.escape(data.categoria)+')';
			connection.query(sql, function(error, row) 
			{
				if(error)throw error;
				else{
					var id = row.insertId;
					var sql='';
					for (var i = 0; i < data.cantidadGalerias; i++) {
					    sql = sql+'('+connection.escape(data['galeria'+i])+','+connection.escape(id)+')';
						if(i<data.cantidadGalerias-1){
							sql=sql+',';
						}
					}
					sql = 'insert into h_imagenes(galeria,id_galeria) values'+sql;
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
	A_editCategoria: function(data,callback){
		if(connection){
			var sql='update h_galeria set categoria='+
			connection.escape(data.categoria)+' where id='+
			connection.escape(data.id);

			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					for (var i = 0; i < data.cantidadGalerias; i++) {
						var sql = 'call spEditImagenes('+connection.escape(data['galeria'+i])+','+
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
							var sql = 'delete from h_imagenes where id='+connection.escape(eliminados[i]);
							console.log("sql ",sql),
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
	A_removeCategoria: function(data,callback){
		if(connection){
			var sql = 'delete from h_galeria where id='+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var eliminados=data.eliminados.split(',');
					for (var i = 0; i < eliminados.length; i++) {
						var sql = 'delete from h_imagenes where id='+connection.escape(eliminados[i]);
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

