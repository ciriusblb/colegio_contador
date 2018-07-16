'use strict'

const express = require('express')
const controller = require('../../controllers/organizacion/controller')
const organizacion = express.Router();

organizacion.route('/Decanos')
	.get(controller.getDecanos);


organizacion.route('/A_Decanos')
	.get(controller.A_getDecanos)
	.post(controller.A_saveDecano);

organizacion.route('/A_Decanos/:id')
	.put(controller.A_editDecano)
	.delete(controller.A_deleteDecano);

module.exports = organizacion