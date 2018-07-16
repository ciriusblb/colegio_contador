'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config/configuration/config')
console.log("confing server ",config);

function createToken (user){
	var datosNesesarios = {
		id: user.user.id,
		username: user.user.username,
		type:user.user.type
	}
	const payload = {
		sub: datosNesesarios,
		iat: moment().unix(),
		exp: moment().add(14,'days').unix()
	}
	return jwt.encode(payload, config)
}

function decodeToken (token){
	const decoded = new Promise((resolve,reject)=>{
		try{
			const payload = jwt.decode(token,config)
			if (payload.exp <= moment().unix()) {
				reject({
					status: 401,
					message: 'el token ha expirado'
				})
			}
			resolve({message:'sin errores'})
		}catch(err){
			reject({
				status:500,
				message:'Invalid Token'
			})
		}
	})
	return decoded
}

module.exports = {
	createToken,
	decodeToken
}