import dbClient from '../utils/db';
import redisClient from '../utils/redis';


class AppController {
  static getStatus(req, res) {
    res.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  static async getStats(req, res) {
    try {
      const usersCount = await dbClient.nbUsers();
      const filesCount = await dbClient.nbFiles();
      res.status(200).json({ users: usersCount, files: filesCount });
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default AppController;
