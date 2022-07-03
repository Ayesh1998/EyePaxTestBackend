const express = require('express')
const router = express.Router()

const SlideController = require('../controllers/slide.controller')

router.post('/carousel', SlideController.addSlide)
router.get('/carousel/:slides', SlideController.getSlides)

module.exports = router;