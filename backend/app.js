'use strict'

// Cargar modulos de node para crear el servidor
const express = require('express');
const bodyParser = require ('body-parser');

//Ejecutar express (http)
const app = express();

//Cargar ficheros de ruta
const article_routes = require('./routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

app.use('/api', article_routes);


//Exportar modulo (fichero actual)
module.exports = app;