'use strict'

const express = require('express')
const controller = require('../../controllers/institucion/controller')
const institucion = express.Router();

const isAuth = require('../../middlewares/login')


institucion.route('/Normas_Legales')
	.get(controller.getNormas)

institucion.route('/Nosotros')
	.get(controller.getNosotros);

institucion.route('/Galeria')
	.get(controller.getGaleria)







institucion.route('/A_Normas_Legales')
	.get(isAuth,controller.A_getNormas)
	.post(controller.A_saveNorma);

institucion.route('/A_Normas_Legales/:id')
	.put(controller.A_editNorma)
	.delete(controller.A_deleteNorma);

institucion.route('/A_Nosotros')
	.get(isAuth,controller.A_getNosotros)
	.post(controller.A_saveNosotro);

institucion.route('/A_Nosotros/:id')
	.put(controller.A_editNosotro)
	.delete(controller.A_removeNosotro);

institucion.route('/A_Galeria')
	.get(isAuth,controller.A_getGaleria)
	.post(controller.A_saveCategoria);

institucion.route('/A_Galeria/:id')
	.get(controller.A_getCategoria)
	.put(controller.A_editCategoria)
	.delete(controller.A_removeCategoria);

module.exports = institucion