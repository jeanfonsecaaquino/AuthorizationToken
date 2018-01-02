var expect = require('chai').expect;
var chai = require('chai');
var tokenDao = require('../../modules/dao/tokenDao')

describe('Teste de configurações da App', () => {

    describe('Conexões', () => {
        it("Deve verificar conexão do redis", done => {
            tokenDao.setKey('nome', 'Jean Aquino');
            new Promise((resolve,reject) =>{
                resolve(tokenDao.getKey('nome'));
            }).then((keyValue)=>{
                expect(keyValue).to.be.equals('Jean Aquino');
                tokenDao.expire('nome', 60);
                done();
            })
        });
    })
});