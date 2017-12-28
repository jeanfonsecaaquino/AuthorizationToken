
 module.exports = new class tokenDao {
     constructor() {
        this.redis = require('./redisConnection');
    }
    setKey(key, value) {
        this.redis.set(key, value);
    }
    getKey(key) {
        return this.redis.get(key);
    }
    expire(key, time){
        this.redis.expire(key, time);
    }
}

