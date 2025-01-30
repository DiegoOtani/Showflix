const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

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
    
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      }
    })

    if(userExists) return res.status(400).json({ message: 'User already registered!' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.userLogin = async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      }
    })

    if(!user) return res.status(400).json({ message: 'Invalid email or password.' });

    const token = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email,
    },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}