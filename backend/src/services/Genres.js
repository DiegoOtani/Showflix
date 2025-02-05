const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

class GenresService {
  static getGenres = () => {
    return prisma.genre.findMany();
  }

  static getGenreByName = (name) => {
    return prisma.genre.findFirst({
      where: { name: name },
    });
  };
};

module.exports = GenresService;