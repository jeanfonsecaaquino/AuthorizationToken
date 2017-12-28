var restify = require('restify');

module.exports = () => {
    var server = restify.createServer();
    server.get('/', respond);

    function respond(req, res, next) {  
        res.charSet('utf-8');
        res.send(200, {mensagem : "A aplicação AuthorizationToken está OnLine"})
    }
    return server;
}