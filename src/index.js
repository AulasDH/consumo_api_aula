const express = require('express');
const cepController = require('./controller/cepController');

const app = express();

app.get('/cep/:codigo', cepController.index)

app.listen(3333);