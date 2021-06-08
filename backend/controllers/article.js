'use strict'

const validator = require("validator");
const Article = require('../models/article');

const controller = {

    courseData: (request, response) => {
        const hola = request.body.hola;
    
        return response.status(200).send({
            curso: 'Marter en Frameworks JS',
            autor: 'Victor Robles',
            hola
        });
    },

    test: (request, response) => {
        return response.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        });
    },

    save: (request, response) => {
        //recoger los parametros por post
        const params = request.body;

        //Validar datos con la libreria del validator
        try {
            const validate_title = !validator.isEmpty(params.title);
            const validate_content = !validator.isEmpty(params.content);
    
    
            if (validate_title && validate_content){

                //crear el objeto a guardar

                //asignar valores

                //guardar el articulo

                //devolver una respuesta
                return response.status(200).send({
                   article: params
                });
            }
            return response.status(200).send({
                message: 'Faltan datos por enviar'
            });
        } catch (error) {
            return response.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
    }
}

module.exports = controller;