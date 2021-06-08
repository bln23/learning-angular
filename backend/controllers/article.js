'use strict'

const validator = require("validator");
const Article = require('../models/article');
const { request } = require("../routes/article");

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
                const article = new Article();

                //asignar valores
                article.title = params.title;
                article.content = params.content;
                article.image = null;

                //guardar el articulo
                article.save((error, articleStored) => {

                    if(error || !articleStored){
                        return request.status(400).send({
                            status: 'error',
                            message: 'El articulo no se ha guardado'
                        });
                    }

                });

                //devolver una respuesta
                return response.status(200).send({
                    status: 'succes',
                    article
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
    },

    getArticles: (request, response) => {
        // find

        Article.find({}).sort('-_id').exec((err, articles) => {

            if (err){
                return response.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });
            }

            if (!articles){
                return response.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

            return response.status(200).send({
                status: 'success',
                articles
            });
        });
    }


};

module.exports = controller;