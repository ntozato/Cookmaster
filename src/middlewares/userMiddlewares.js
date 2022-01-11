const recipeModel = require('../models/recipeModel');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  if (!isEmailValid) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

const validateIsUserOrAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  if (role === 'admin') {
    next();
  }

  const recipe = await recipeModel.getById(id);
  const { userId } = recipe;

  if (_id.toString() !== userId.toString()) {
    return res.status(401).json({ message: 'you are not allowed to update this recipe' });
  }
  next();
};

module.exports = {
  validateEmail,
  validateLogin,
  validateIsUserOrAdmin,
};