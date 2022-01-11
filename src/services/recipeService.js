const recipeModel = require('../models/recipeModel');
const validations = require('../validations/recipeValidations');

const create = async (name, ingredients, preparation, userId) => {
  const isEntriesValid = validations.validateEntries(name, ingredients, preparation);

  if (!isEntriesValid) {
    return { error: { message: 'Invalid entries. Try again.', status: 400 } };
  }

  return recipeModel.create(name, ingredients, preparation, userId);
};

const getAll = async () => {
  const recipes = await recipeModel.getAll();
  return recipes;
};

const getById = async (id) => {
  const recipe = await recipeModel.getById(id);

  if (!recipe) {
    return { error: { message: 'recipe not found', status: 404 } };
  }
  return recipe;
};

const update = async ({ id, name, ingredients, preparation, userId }) => {
  const updatedRecipe = await recipeModel.update({ id, name, ingredients, preparation, userId });
  return updatedRecipe;
};

const exclude = async (id) => {
  const excludeRecipe = await recipeModel.exclude(id);
  return excludeRecipe;
};

const insertImage = async (id) => {
  const insert = await recipeModel.insertImage(id);
  return insert;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
  insertImage,
};