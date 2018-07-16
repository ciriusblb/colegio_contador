'use strict'

const express = require('express')
const controller = require('../../controllers/sidebar/controller')
const sidebar = express.Router();
sidebar.route('/layout')
.get(controller.getEnlaces)

module.exports = sidebar