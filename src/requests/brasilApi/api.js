const axios = require('axios');

const api = axios.create({
    baseURL: 'https://brasilapi.com.br/api',
    timeout: 4000,
});

module.exports = api;