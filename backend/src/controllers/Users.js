const UserService = require('../services/Users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

module.exports.createUser = async(req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const userExists = await UserService.getUserByEmail(email);

    if(userExists) return res.status(400).json({ message: 'User already registered!' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserService.createUser({
        name,
        email,
        password: hashedPassword,
  })

    const token = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email,
    },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.userLogin = async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUserByEmail(email);

    if(!user) return res.status(400).json({ message: 'Invalid email.' });

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).json({ message: 'Invalid Password.' });

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