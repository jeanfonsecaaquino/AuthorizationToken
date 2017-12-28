var expect = require('chai').expect;
var chai = require('chai');
const axios = require('axios');

var app = require('../../serverConfig')();

describe('Deve Iniciar a aplicação e verificar se o rest esta ok', () => {

    before(() => {
        app.listen(8080, () => {
            console.log("Servidor iniciado utilizando o Restfy");
        });
    });

    after(() => {
        app.close();
    });

    it("Deve Verificar se a aplicação Sobe ", done => {
        axios.get('http://localhost:8080/')
            .then(response => {
                done();
            })
    });

});