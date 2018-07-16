'use strict'

const dataModels = require('../../models/colegiados/model')

var controllers ={
	getColegiado : function(req,res){
		dataModels.getColegiado(req.query,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})		
	},
	getCertificado : function(req,res){
		dataModels.getCertificado(req.query,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	getMiembros : function(req,res){
		dataModels.getMiembros((error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	getMiembro : function(req,res){
		console.log("traer ",req.params)
		dataModels.getMiembro(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data);
		});
	},
	saveMiembro : function(req,res){
		console.log("gfiardam ",req.body);
		dataModels.saveMiembro(req.body,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	editMiembro : function(req,res){
		req.body.id=req.params.id;
		console.log("editando ",req.body);
		dataModels.editMiembro(req.body,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	deleteMiembro : function(req,res){
		console.log("elomoar ",req.params);
		dataModels.deleteMiembro(req.params,(error,data)=>{
			if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
			if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
			res.status(200).send(data)
		})
	},
	// getCertificados : function(req,res){
	// 	dataModels.getCertificados((error,data)=>{
	// 		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
	// 		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
	// 		res.status(200).send(data)
	// 	})
	// },
	// saveCertificado : function(req,res){
	// 	dataModels.saveCertificado(req.body,(error,data)=>{
	// 		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
	// 		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
	// 		res.status(200).send(data)
	// 	})
	// },
	// editCertificado : function(req,res){
	// 	req.body.id=req.params.id;
	// 	dataModels.editCertificado(req.body,(error,data)=>{
	// 		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
	// 		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
	// 		res.status(200).send(data)
	// 	})
	// },
	// deleteCertificado : function(req,res){
	// 	dataModels.deleteCertificado(req.params,(error,data)=>{
	// 		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
	// 		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
	// 		res.status(200).send(data)
	// 	})
	// },

}
module.exports=controllers;
