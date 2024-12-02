const User = require('../models/models');  
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'your_secret_key'; 


const createToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};


const registerUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: 'firstname, email, and password are required' });
  }

  
  User.register(firstname, lastname, email, password, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user', error: err });
    }
    res.status(201).json({ message: 'User registered successfully', user });
  });
};


const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

  
  User.login(email, password, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging in', error: err });
    }
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = createToken(user.id);
    res.cookie("token", token, {
        httpOnly:true, 
        maxAge: 3600 * 10000 * 5,
        sameSite: "strict"
    }).status(200).json({ message: 'Login successful', token });
  });
};

module.exports = { registerUser, loginUser };
