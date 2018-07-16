'use strict'

const dataModels = require('../../models/institucion/model')
const upload = require('../../services/upload');


var controllers ={
	getNormas: function(req,res){
		dataModels.getNormas((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})		
	},
	getNosotros: function(req,res){
		dataModels.getNosotros((error,data)=>{
		    if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	getGaleria: function(req,res){
		dataModels.getGaleria((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},




	A_getNormas : function(req,res){
		dataModels.A_getNormas((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})	
	},
	A_saveNorma : function(req,res){
		dataModels.A_getIds((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveNorma(data,(error,data)=>{
					console.log("devolciendo ",data);
					res.status(200).send(data);
				})
			})
		})
	},
	A_editNorma: function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editNorma(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editNorma(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_deleteNorma: function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_deleteNorma(req.params,(error,data)=>{
			res.send(data);
		})
	},
	A_getNosotros : function(req,res){
		dataModels.A_getNosotros((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_saveNosotro : function(req,res){
		dataModels.A_saveNosotro(req.body,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_editNosotro : function(req,res){
		dataModels.A_editNosotro(req.body,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_removeNosotro : function(req,res){
		dataModels.A_removeNosotro(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},

	A_getGaleria:function(req,res){
		dataModels.A_getGaleria((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getCategoria : function(req,res){
		dataModels.A_getCategoria(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	A_saveCategoria:function(req,res){
		dataModels.A_getIds_Galeria((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveCategoria(data,(error,data)=>{
					res.status(200).send(data);
				})
			})
		})
	},
	A_editCategoria:function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editCategoria(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editCategoria(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_removeCategoria:function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		req.params.eliminados=req.query.eliminarId.toString();
		dataModels.A_removeCategoria(req.params,(error,data)=>{
			res.send(data);
		})
	},	

}






module.exports =controllers;