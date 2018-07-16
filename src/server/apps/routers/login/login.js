'use strict'

const express = require('express')
const loginCtrl = require('../../controllers/login/login')
const login = express.Router()

login.route('/login')
	.get(loginCtrl.sendUsername)
	.post(loginCtrl.sendPassword);

module.exports = login