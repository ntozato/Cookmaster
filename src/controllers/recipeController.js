const recipeService = require('../services/recipeService');

const create = async (req, res) => {
  const { _id } = req.user;
  const { name, ingredients, preparation } = req.body;
  const newRecipe = await recipeService.create(name, ingredients, preparation, _id);
  
  if (newRecipe.error) {
    const { message, status } = newRecipe.error;
    return res.status(status).json({ message });
  }

  return res.status(201).json(newRecipe);
};

const getAll = async (_req, res) => {
  const recipes = await recipeService.getAll();
  res.status(200).json(recipes);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const recipe = await recipeService.getById(id);

  if (recipe.error) {
    const { message, status } = recipe.error;
    return res.status(status).json({ message });
  }

  res.status(200).json(recipe);
};

const update = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id: userId } = req.user;
  const { id } = req.params;

  const updatedRecipe = await recipeService.update({ id, name, ingredients, preparation, userId });
  res.status(200).json(updatedRecipe);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  const excludeRecipe = await recipeService.exclude(id);
  res.status(204).json(excludeRecipe);
};

const insertImage = async (req, res) => {
  const { id } = req.params;
  const insert = await recipeService.insertImage(id);

  return res.status(200).json(insert);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
  insertImage,
};