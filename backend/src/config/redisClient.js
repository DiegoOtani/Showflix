const Redis = require('ioredis');

const redisClient = new Redis({
  host: '127.0.0.1', 
  port: 6379,        
});

redisClient.on('connect', () => console.log('Redis conectado via Docker'));
redisClient.on('error', (err) => console.error('Erro no Redis:', err));

module.exports = redisClient;
