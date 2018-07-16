'use strict'

const dataModels = require('../../models/login/model')

function logueo (req,res){
	dataModels.logueo(req.query,(error,data)=>{
		if (error) return res.status(500).send({message: `se ha producido un error ${error}`})
		if (!data) return res.status(404).send({message: `no se ha podido encontrar el elemento ${error}`})			
		res.status(200).send(data);
	})
}
module.exports = {
	logueo
}
