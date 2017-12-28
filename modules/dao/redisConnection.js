var Redis = require('ioredis');
var enviroment = require('../config/config');
var Redis = require('ioredis');

module.exports = new Redis(enviroment.getConfig().port, enviroment.getConfig().url);