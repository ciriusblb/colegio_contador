'use strict'

const express = require('express')
const controller = require('../../controllers/colegiados/controller')
const colegiados = express.Router();
const isAuth = require('../../middlewares/login')


colegiados.route('/Colegiado')
	.get(controller.getColegiado);

colegiados.route('/Certificado')
	.get(controller.getCertificado);





colegiados.route('/Miembros')
	.get(isAuth,controller.getMiembros)
	.post(controller.saveMiembro);
	
colegiados.route('/Miembros/:id')
	.get(controller.getMiembro)
	.put(controller.editMiembro)
	.delete(controller.deleteMiembro);



// colegiados.route('/Certificados')
// 	.get(isAuth,controller.getCertificados)
// 	.post(controller.saveCertificado);

// colegiados.route('/Certificados/:id')
// 	.put(controller.editCertificado)
// 	.delete(controller.deleteCertificado);
	
module.exports = colegiados