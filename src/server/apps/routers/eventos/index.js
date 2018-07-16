'use strict'

const express = require('express')
const controller = require('../../controllers/eventos/controller')
const isAuth = require('../../middlewares/login')

const eventos = express.Router();




eventos.route('/Eventos')
	.get(controller.getEventos);

eventos.route('/Eventos/:id')
	.get(controller.getEvento);




eventos.route('/A_Eventos')
	.get(isAuth,controller.A_getEventos)
	.post(controller.A_saveEvento);
	
eventos.route('/A_Eventos/:id')
	.get(controller.A_getEvento)
	.put(controller.A_editEvento)
	.delete(controller.A_deleteEvento);



eventos.route('/Evento/:id')
	.get(controller.getEvento);

eventos.route('/Cumple')
	.get(controller.getMiembros);

module.exports = eventos;