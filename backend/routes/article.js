'use stritc'

const express = require('express');
const articleController = require('../controllers/article');

const router = express();

//rutas de prueba

router.post('/datos-curso', articleController.courseData);
router.get('/test-de-controller', articleController.test);

//rutas utiles
router.post('/save', articleController.save);

module.exports = router;
