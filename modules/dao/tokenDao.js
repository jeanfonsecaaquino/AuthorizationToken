module.exports = new class tokenDao {
    constructor() {
        this.redis = require('./redisConnection');
    }
    setKey(key, value) {
        this.redis.set(key, value);
    }
    getKey(key) {
        return new Promise((resolve, reject) => {
            this.redis.get(key).then((result) => {
                return resolve(result);
            });
        })
    }
    expire(key, time) {
        this.redis.expire(key, time);
    }
}

