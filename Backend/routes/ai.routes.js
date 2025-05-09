const express = require('express')
const Router = express.Router()
const {getReview} = require('../controllers/ai.controller')

Router.post('/get-review',getReview)

module.exports = Router