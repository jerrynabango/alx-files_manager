import redisCleint from '../utils/redis';
import dbClient from '../utils/db';

const getStatus = (req, response) => {
  response.status(200).json({ redis: redisCleint.isAlive(), db: dbClient.isAlive() });
};

const getStats = async (req, response) => {
  response.status(200).json({ users: await dbClient.nbUsers(), files: await dbClient.nbFiles() });
};

module.exports = { getStats, getStatus };
