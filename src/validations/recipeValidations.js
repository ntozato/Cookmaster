const validateEntries = (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
    return false;
  }
  return true;
};

module.exports = {
  validateEntries,
};