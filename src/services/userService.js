const userModel = require('../models/userModel');

const create = async (name, email, password) => {
  const userExists = await userModel.findUserByEmail(email);
  const isUserEntriesValid = name && email && password;

  if (!isUserEntriesValid) {
    return { error: { message: 'Invalid entries. Try again.', status: 400 } };
  }

  if (userExists) {
    return { error: { message: 'Email already registered', status: 409 } };
  }

  return userModel.create(name, email, password);
};

module.exports = {
  create,
};