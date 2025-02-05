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
};

module.exports = TvShowService;