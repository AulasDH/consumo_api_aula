const brasilApiCep = require("../requests/brasilApi/cep");

const cepController = {
    index: async (request, response) => {
        const { codigo } = request.params;

        // const resposta = await brasilApiCep.getCep(codigo);

        // const endereco = resposta.data;

        const { data: endereco } = await brasilApiCep.getCep(codigo);

        return response.json(endereco);
    }
}

module.exports = cepController;