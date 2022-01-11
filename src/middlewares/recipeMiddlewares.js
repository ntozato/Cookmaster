const { ObjectId } = require('mongodb');

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'recipe not found' });
  }

  next();
};

module.exports = { validateObjectId };