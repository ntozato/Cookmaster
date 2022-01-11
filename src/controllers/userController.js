const userService = require('../services/userService');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  const createUser = await userService.create(name, email, password);

  if (createUser.error) {
    const { status, message } = createUser.error;
    return res.status(status).json({ message });
  }

  return res.status(201).json(createUser);
};

module.exports = {
  create,
};