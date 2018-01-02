var fs = require('fs');

module.exports = new class EnvConfig {
    constructor() {
    }
    getConfig() {
        const configFile = "./modules/config/development/config.json";
        if (fs.existsSync(configFile)) {
            return JSON.parse(fs.readFileSync(configFile));
        }
    }
    printEnviroment() {
        console.log('Configurações de ambientes carregadas com sucesso');
    }
}