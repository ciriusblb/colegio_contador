'use strict'

const dataModels = require('../../models/sidebar/model');
function getEnlaces (req,res){
	dataModels.getEnlaces((error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${err}`})			
		res.status(200).send(data)
	})
}



module.exports = {
	getEnlaces
}