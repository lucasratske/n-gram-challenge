const routes = require('express').Router();

const NGramController = require('./app/controllers/NGramController');

routes.get('/ngram', NGramController.getNGram);

module.exports = routes;
