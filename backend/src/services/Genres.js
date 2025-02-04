const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

class GenresService {
  static getGenres = () => {
    return prisma.genre.findMany();
  }
}

module.exports = GenresService;