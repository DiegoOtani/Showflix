const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

class TvShowService {
  static getTvShows = () => {
    return prisma.tvShow.findMany({
      include: {
        genres: true,
      }
    });
  };

  static createTvShow = (data) => {
    return prisma.tvShow.create({ data });
  };

  static getTvShowsByName = (name) => {
    return prisma.tvShow.findMany({
      where: {
        title: {
          contains: name,
        }
      },
      include: {
        genres: true,
      }
    })
  }
};

module.exports = TvShowService;