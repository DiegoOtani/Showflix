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

module.exports.createUser = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    })

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};