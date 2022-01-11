const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (name, ingredients, preparation, userId) => {
  const db = await connection();

  const recipe = {
    name,
    ingredients,
    preparation,
    userId,
  };

  const createRecipe = await db.collection('recipes').insertOne(recipe);

  return { recipe: { name, ingredients, preparation, userId, _id: createRecipe.insertedId } };
};

const getAll = async () => {
  const db = await connection();

  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
};

const getById = async (id) => {
  const db = await connection();

  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  return recipe;
};

const update = async ({ id, name, ingredients, preparation, userId }) => {
  const db = await connection();

  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) }, { $set: { name, ingredients, preparation, userId } },
);
  const updatedRecipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });

  return updatedRecipe;
};

const exclude = async (id) => {
  const db = await connection();

  const excludeRecipe = await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
  return excludeRecipe;
};

const insertImage = async (id) => {
  const db = await connection();
  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) }, { $set: { image: `localhost:3000/src/uploads/${id}.jpeg` } },
  );
  const updatedRecipe = await getById(id);
  console.log(updatedRecipe);
  return updatedRecipe;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
  insertImage,
};