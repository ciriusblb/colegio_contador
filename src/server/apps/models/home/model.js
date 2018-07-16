'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getHome : function(callback){
		if (connection) {
			var sql = `Call getAll()`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getSlider : function(callback){
		if (connection) {
			var sql = `select * from h_slide`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getSlide : function(data,callback){
		if (connection) {
			var sql = `select * from h_slide where id=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					callback(null,row[0]);
				}
			})
		}
	},
	A_saveSlide : function(data,callback){
		if(connection){
			var sql = 'insert into h_slide(slide) values('+
			connection.escape(data.slide0)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId,slide:data.slide0});
				}
			});
		}
	},
	A_getId_Slide : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_slide';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					if(!row[0].id){
						row[0].id=0;
					}
					callback(null,row[0].id);
				}
			});
		}
	},
	A_editSlide : function(data,callback){
		if(connection){
			var sql = 'update h_slide set slide ='+
			connection.escape(data.slide)+' where  id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{slide:data.slide});
				}
			});
		}
	},
	A_removeSlide : function(data,callback){
		if(connection){
			var sql = 'delete from h_slide where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},
	A_getNoticias : function(callback){
		if (connection) {
			var sql = `select * from h_noticia`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}		
	},
	A_getNoticia : function(data,callback){
		if (connection) {
			var sql = `select * from h_noticia where id=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					callback(null,row[0]);
				}
			})
		}
	},
	A_getId_Noticia : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_noticia';
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
	A_saveNoticia:function(data,callback){
		if(connection){
			var sql = 'insert into h_noticia(titulo,descripcion,noticia,fuente) values('+
			connection.escape(data.titulo)+','+
			connection.escape(data.descripcion)+','+
			connection.escape(data.noticia0)+','+
			connection.escape(data.fuente)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId,noticia:data.noticia0});
				}
			});
		}
	},
	A_editNoticia:function(data,callback){
		if(connection){
			var sql = 'update h_noticia set titulo ='+
			connection.escape(data.titulo)+', descripcion = '+
			connection.escape(data.descripcion)+', noticia = '+
			connection.escape(data.noticia)+', fuente = '+
			connection.escape(data.fuente)+' where  id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{noticia:data.noticia});
				}
			});
		}		
	},
	A_removeNoticia : function(data,callback){
		if(connection){
			var sql = 'delete from h_noticia where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},

	A_getEnlaces : function(callback){
		if (connection) {
			var sql = `select * from h_enlace`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getEnlace : function(data,callback){
		if (connection) {
			var sql = `select * from h_enlace where id=`+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					callback(null,row[0]);
				}
			})
		}
	},
	A_getId_Enlace : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_enlace';
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
	A_saveEnlace : function(data,callback){
		if(connection){
			var sql = 'insert into h_enlace(titulo,enlace,url) values('+
			connection.escape(data.titulo)+','+
			connection.escape(data.enlace0)+','+
			connection.escape(data.url)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId,enlace:data.enlace0});
				}
			});
		}
	},

	A_editEnlace : function(data,callback){
		if(connection){
			var sql = 'update h_enlace set titulo ='+
			connection.escape(data.titulo)+', enlace = '+
			connection.escape(data.enlace)+', url = '+
			connection.escape(data.url)+' where  id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{enlace:data.enlace});
				}
			});
		}
	},
	A_removeEnlace : function(data,callback){
		if(connection){
			var sql = 'delete from h_enlace where id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			});
		}
	},
	A_getInformes : function(callback){
		if (connection) {
			var sql = `select * from h_informe`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row);
				}
			});
		}
	},
	A_getId_Informe : function(callback){
		if(connection){
			var sql = 'SELECT MAX(id) AS id FROM h_informe';
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
	A_saveInforme : function(data,callback){
		if(connection){
			var sql = 'insert into h_informe(header,titulo,descripcion,informe,nombre_archivo,fecha) values('+
			connection.escape(data.header)+','+
			connection.escape(data.titulo)+','+
			connection.escape(data.descripcion)+','+
			connection.escape(data.informe0)+','+
			connection.escape(data.nombre_archivo)+','+
			connection.escape(data.fecha)+')';
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{id:row.insertId,informe:data.informe0});
				}
			});
		}
	},
	A_editInforme : function(data,callback){
		if(connection){
			var sql = 'update h_informe set header ='+
			connection.escape(data.header)+', titulo = '+
			connection.escape(data.titulo)+', descripcion = '+
			connection.escape(data.descripcion)+', informe = '+
			connection.escape(data.informe)+', nombre_archivo = '+
			connection.escape(data.nombre_archivo)+', fecha = '+
			connection.escape(data.fecha)+' where  id = '+connection.escape(data.id);
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,{informe:data.informe});
				}
			});
		}
	},
	A_removeInforme : function(data,callback){
		if(connection){
			console.log(data);
			var sql = 'delete from h_informe where id = '+connection.escape(data.id);
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

