+'use strict'

const dataModels = require('../../models/login/login')
const service = require('../../services/token')
var controllers ={
	sendUsername:function(req,res){
		// if (!req.params) return res.status(500).send({message:"no hay usuario que buscar"})
		dataModels.sendUsername(req.query,(error,data)=>{
			console.log("controler ",data);
			return (data.error) ? res.status(404).send({message:`no se pudo encontrar al cliente`}) : res.status(200).send(data)		
		})		
	},
	sendPassword:function(req,res){
		dataModels.sendPassword(req.body,(error,data)=>{
			console.log("devolciendo ",data);
			return (data.confirm == 'founded') ? 
			res.status(200).send({
				message:'te has logueado correctamente',
				token: service.createToken(data)
			}) : 
			res.status(404).send({
				message:'invalid'
			})
			res.send({});
		})		
	},
	getAuthorization:function(req,res){
			console.log("para verificar el token..",req.body)
	var token = req.body.key
 	if (!token) {
 		return res.status(401).send({message:'no esta logueado'})
 	}
	    service.decodeToken(token)
	    .then(response =>{
	        console.log("esto es lo que va a responder...",response)
	        res.status(200).send(response)
	    })
	    .catch(response =>{
	        res.status(response.status)
	    }) 
	}
}

module.exports = controllers;
