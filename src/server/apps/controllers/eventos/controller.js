'use strict'

const dataModels = require('../../models/eventos/model');
const upload = require('../../services/upload');

function getEventos (req,res){
	dataModels.getEventos((error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data)
	})
}
function getEvento (req,res){
	dataModels.getEvento(req.params,(error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data)
	})		
}

function A_getEventos (req,res){
	dataModels.A_getEventos((error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data)
	})
}
function A_saveEvento(req,res){
	dataModels.getIds((error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		req.body.id_img=data;
		upload.getSetImage(req,(error,data)=>{
			dataModels.A_saveEvento(data,(error,data)=>{
				res.status(200).send(data);
			})
		})
	})
}
function A_editEvento(req,res){
	if(req.body.eliminarimagenes){
		upload.removeImage(req.body.eliminarimagenes,(error,data)=>{})
	}
	if(Object.keys(req.files).length>0){
		upload.getEditImage(req,(error,data)=>{
			dataModels.A_editEvento(data,(error,data)=>{
				res.send(data);
			})
		})
	}else{
		dataModels.A_editEvento(req.body,(error,data)=>{
			res.send(data);
		})
	}
}
function A_deleteEvento(req,res){
	if(req.query.eliminarimagenes.length>0){
		upload.removeImage(req.query.eliminarimagenes.toString(),(error,data)=>{})
	}
	req.params.eliminados=req.query.eliminarId.toString();
	dataModels.A_deleteEvento(req.params,(error,data)=>{
		res.send(data);
	})
}
function A_getEvento (req,res){
	dataModels.A_getEvento(req.params,(error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data)
	})		
}
function getMiembros (req,res){
	dataModels.getMiembros((error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data)
	})
}


module.exports = {
	getEventos,
	getEvento,
	A_getEventos,
	A_saveEvento,
	A_editEvento,
	A_deleteEvento,
	A_getEvento,
	getMiembros
}