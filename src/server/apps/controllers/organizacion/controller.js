'use strict'

const dataModels = require('../../models/organizacion/model');
const upload = require('../../services/upload');


var controller ={
	getDecanos: function(req,res){
		dataModels.getDecanos((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getDecanos: function(req,res){
		dataModels.A_getDecanos((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_saveDecano : function(req,res){
		dataModels.A_getId_Decano((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveDecano(data,(error,data)=>{
					res.status(200).send(data);
				})
			})
		})
	},
	A_editDecano: function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editDecano(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editDecano(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_deleteDecano : function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_deleteDecano(req.params,(error,data)=>{
			res.send(data);
		})

	}
}



module.exports = controller;