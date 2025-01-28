const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

module.exports.getUsers = async(req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error'});
  }
};
