const jwt = require('jsonwebtoken');
const PrismaClient = require('@prisma/client').PrismaClient;
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

module.exports.authMiddleware = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if(!token) throw new Error();

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
      }
    })
    if(!user) throw new Error();

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}