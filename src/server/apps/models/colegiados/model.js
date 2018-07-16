'use strict'

var connection = require('../../../config/mysql/connection')

var dataModels = {
	getColegiado : function(data,callback){
		if (connection) {
			var sql = `select * from h_miembro,h_colegiado where 
			h_miembro.matricula =`+connection.escape(data.matricula)+
			`and h_miembro.ap_Paterno =`+connection.escape(data.ap_Paterno)+
			`and h_miembro.ap_Materno =`+connection.escape(data.ap_Materno)+
			`and h_miembro.nombre =`+connection.escape(data.nombre)+
			`and h_miembro.id = h_colegiado.id`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					callback(null,row[0]);
				}
			});
		}
	},
	getCertificado : function(data,callback){
		if (connection) {
			var sql = `select * from h_miembro,h_certificado where 
			h_miembro.matricula =`+connection.escape(data.matricula)+
			`and h_miembro.ap_Paterno =`+connection.escape(data.ap_Paterno)+
			`and h_miembro.ap_Materno =`+connection.escape(data.ap_Materno)+
			`and h_miembro.nombre =`+connection.escape(data.nombre)+
			`and h_certificado.numero=`+connection.escape(data.numero)+
			`and h_miembro.id=h_certificado.id`;
			connection.query(sql, function(error,row){
				if (error) throw error
				else{
					console.log(row[0]);
					callback(null,row[0]);
				}
			});
		}
	},


	getMiembros : function(callback){
		if(connection){
			var sql = 'select * from h_miembro,h_colegiado where h_miembro.id = h_colegiado.id';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else {
					var array1=row;
					var sql = 'select * from h_certificado';
					connection.query(sql,function(error,row){
						if(error) throw error;
						else{
						 	for (var i = 0; i < array1.length; i++) {
						 		for (var j = 0; j < row.length; j++) {
						 			if(array1[i].id==row[j].id){
						 				array1[i].tipo='certificado';
						 			}
						 		}
						 		if(!array1[i].tipo){
						 			array1[i].tipo='colegiado';
						 		}
						 	}
							callback(null,array1);
						}
					})
				}
			})
		}
	},
	getMiembro : function(data,callback){
		if(connection){
			var sql = 'select h_miembro.*,h_colegiado.* from h_miembro,h_colegiado where h_miembro.id=h_colegiado.id and h_miembro.id='+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else {
					var obj = row;
					var sql = 'select * from h_certificado where id ='+connection.escape(data.id);
					connection.query(sql,function(error,row){
						if(error) throw error;
						else{
							console.log("then ",row[0]);
							if(row[0]){
								row[0].certificacion = true;
								obj[0] = Object.assign(obj[0], row[0]);
							}else{
								obj[0].certificacion=false;
							}
							console.log('data ',obj);

							callback(null,obj[0]);
						}
					})
				}
			})
		}
	},

	saveMiembro : function(data,callback){
		if(connection){
			var sql = 'insert into h_miembro(matricula,ap_Paterno,ap_Materno,nombre,fecha_Nac) values('+
			connection.escape(data.matricula)+','+
			connection.escape(data.ap_Paterno)+','+
			connection.escape(data.ap_Materno)+','+
			connection.escape(data.nombre)+','+
			connection.escape(data.fecha_Nac)+')';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var id=row.insertId;
					var sql = 'insert into h_colegiado(id,incorporacion,estado,vigencia) values('+
					connection.escape(row.insertId)+','+
					connection.escape(data.incorporacion)+','+
					connection.escape(data.estado)+','+
					connection.escape(data.vigencia)+')';
					connection.query(sql,function(error,row){
						if(error) throw error;
						else callback(null,{id:id});
					})
				}
			})
		}
	},
	editMiembro : function(data,callback){
		if(connection){
			if(data.certificacion==0){
				data.numero='null';
				data.fecha_caducidad='null';
			}
			var sql = 'call spEditMiembro('+connection.escape(data.id)+','+
			connection.escape(data.matricula)+','+
			connection.escape(data.ap_Paterno)+','+
			connection.escape(data.ap_Materno)+','+
			connection.escape(data.nombre)+','+
			connection.escape(data.fecha_Nac)+','+
			connection.escape(data.incorporacion)+','+
			connection.escape(data.estado)+','+
			connection.escape(data.vigencia)+','+
			connection.escape(data.numero)+','+
			connection.escape(data.fecha_caducidad)+','+
			connection.escape(data.certificacion)+')';
			connection.query(sql,function(error,data){
				if(error) throw error;
				else callback(null,{msg:'editado correctamente'});
			})
		}
	},
	deleteMiembro : function(data,callback){
		if(connection){
			var sql = 'call deleteColegiado('+connection.escape(data.id)+')';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			})
		}
	},


	getCertificados : function(callback){
		if(connection){
			var sql = 'select h_miembro.*,h_certificado.numero,h_certificado.fecha_caducidad from h_miembro,h_certificado where h_miembro.matricula=h_certificado.matricula';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else callback(null,row);
			})
		}
	},

	saveCertificado : function(data,callback){
		if(connection){
			var sql = 'insert into h_miembro(matricula,ap_Paterno,ap_Materno,nombre,fecha_Nac) values('+
			connection.escape(data.matricula)+','+
			connection.escape(data.ap_Paterno)+','+
			connection.escape(data.ap_Materno)+','+
			connection.escape(data.nombre)+','+
			connection.escape(data.fecha_Nac)+')';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var id=row.insertId;
					var sql = 'insert into h_certificado(id,matricula,numero,fecha_caducidad) values('+
					connection.escape(row.insertId)+','+
					connection.escape(data.matricula)+','+
					connection.escape(data.numero)+','+
					connection.escape(data.fecha_caducidad)+')';
					connection.query(sql,function(error,row){
						if(error) throw error;
						else callback(null,{id:id});
					})
				}
			})
		}
	},
	editCertificado : function(data,callback){
		if(connection){
			var sql = 'update h_miembro set matricula ='+
			connection.escape(data.matricula)+', ap_Paterno ='+
			connection.escape(data.ap_Paterno)+', ap_Materno ='+
			connection.escape(data.ap_Materno)+', nombre ='+
			connection.escape(data.nombre)+', fecha_Nac ='+
			connection.escape(data.fecha_Nac)+' where id ='+connection.escape(data.id);
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					var sql = 'update h_certificado set matricula ='+
					connection.escape(data.matricula)+', numero ='+
					connection.escape(data.numero)+', fecha_caducidad ='+
					connection.escape(data.fecha_caducidad)+' where id ='+connection.escape(data.id);
					connection.query(sql,function(error,row){
						if(error) throw error;
						else callback(null,{msg:'editado correctamente'});
					})
				}
			})
		}
	},
	deleteCertificado : function(data,callback){
		if(connection){
			var sql = 'call deleteCertificado('+connection.escape(data.id)+')';
			connection.query(sql,function(error,row){
				if(error) throw error;
				else{
					callback(null,{msg:'eliminado correctamente'});
				}
			})
		}
	},
};

module.exports = dataModels

