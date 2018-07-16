'use strict'

const express = require('express')
const controller = require('../../controllers/home/controller')
const isAuth = require('../../middlewares/login')

const home = express.Router();

home.route('/getHome')
.get(controller.getHome);

home.route('/A_Slider')
	.get(isAuth,controller.A_getSlider)
	.post(controller.A_saveSlide);

home.route('/A_Slider/:id')
	.get(controller.A_getSlide)
	.put(controller.A_editSlide)
	.delete(controller.A_removeSlide);


home.route('/A_Noticias')
	.get(isAuth,controller.A_getNoticias)
	.post(controller.A_saveNoticia);

home.route('/A_Noticias/:id')
	.get(controller.A_getNoticia)
	.put(controller.A_editNoticia)
	.delete(controller.A_removeNoticia);


home.route('/A_Enlaces')
	.get(isAuth,controller.A_getEnlaces)
	.post(controller.A_saveEnlace);

home.route('/A_Enlaces/:id')
	.get(controller.A_getEnlace)
	.put(controller.A_editEnlace)
	.delete(controller.A_removeEnlace); 

home.route('/A_Informes')
	.get(isAuth,controller.A_getInformes)
	.post(controller.A_saveInforme);

home.route('/A_Informes/:id')
	.put(controller.A_editInforme)
	.delete(controller.A_removeInforme); 

module.exports = home