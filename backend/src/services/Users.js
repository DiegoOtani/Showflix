const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

class UserService {
  static createUser = (data) => {
    return prisma.user.create({ data });
  }

  static getUserByEmail = (email) => {
    return prisma.user.findFirst({
      where: {
        email,
      }
    });
  };
};

module.exports = UserService;