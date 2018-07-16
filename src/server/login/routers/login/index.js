'use strict'

const express = require('express')
const controller = require('../../controllers/login/controller')
const login = express.Router();

login.route('/logueo')
	.get(controller.logueo);

module.exports = login