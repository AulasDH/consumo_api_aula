
const api = require('./api');

const url = '/cep/v2';

// https://brasilapi.com.br/api/cep/v2/1234567

// axios({
//     ...api,
//     method: 'get',
//     url: `${url}/${codigo}`
// })

const brasilApiCep = {
    getCep: (codigo) => api.get(`${url}/${codigo}`),
}

module.exports = brasilApiCep