var app = require('./serverConfig')();

app.listen(8080, function(){
    console.log("Servidor iniciado utilizando o Restfy");
});