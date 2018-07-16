'use strict'

const dataModels = require('../../models/home/model');
const upload = require('../../services/upload');


var controllers = {
	getHome : function(req,res){
		dataModels.getHome((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getSlider : function(req,res){
		dataModels.A_getSlider((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getSlide : function(req,res){
		dataModels.A_getSlide(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	A_saveSlide : function(req,res){
		dataModels.A_getId_Slide((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveSlide(data,(error,data)=>{
					res.status(200).send(data);
				})
			})
		})
	},
	A_editSlide : function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editSlide(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editSlide(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_removeSlide : function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_removeSlide(req.params,(error,data)=>{
			res.send(data);
		})
	},
	A_getNoticias: function(req,res){
		dataModels.A_getNoticias((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getNoticia: function(req,res){
		dataModels.A_getNoticia(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	A_saveNoticia: function(req,res){
		dataModels.A_getId_Noticia((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveNoticia(data,(error,data)=>{
					res.status(200).send(data);
				})
			})
		})		
	},
	A_editNoticia: function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editNoticia(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editNoticia(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_removeNoticia: function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_removeNoticia(req.params,(error,data)=>{
			res.send(data);
		})
	},
	A_getEnlaces : function(req,res){
		dataModels.A_getEnlaces((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})
	},
	A_getEnlace : function(req,res){
		dataModels.A_getEnlace(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	A_saveEnlace : function(req,res){
		dataModels.A_getId_Enlace((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveEnlace(data,(error,data)=>{
					res.status(200).send(data);
				})
			})
		})	
	},
	A_editEnlace : function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editEnlace(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editEnlace(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_removeEnlace : function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_removeEnlace(req.params,(error,data)=>{
			res.send(data);
		})
	},
	A_getInformes : function(req,res){
		dataModels.A_getInformes((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
			res.status(200).send(data)
		})	
	},
	A_saveInforme : function(req,res){
		dataModels.A_getId_Informe((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			req.body.id_img=data;
			upload.getSetImage(req,(error,data)=>{
				dataModels.A_saveInforme(data,(error,data)=>{
					console.log("devolciendo ",data);
					res.status(200).send(data);
				})
			})
		})
	},
	A_editInforme : function(req,res){
		if(req.body.eliminarimagenes){
			upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
		}
		if(Object.keys(req.files).length>0){
			upload.getEditImage(req,(error,data)=>{
				dataModels.A_editInforme(data,(error,data)=>{
					res.send(data);
				})
			})
		}else{
			dataModels.A_editInforme(req.body,(error,data)=>{
				res.send(data);
			})
		}
	},
	A_removeInforme : function(req,res){
		if(req.query.eliminarimagenes.length>0){
			upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
		}
		dataModels.A_removeInforme(req.params,(error,data)=>{
			res.send(data);
		})
	},
}

module.exports = controllers;