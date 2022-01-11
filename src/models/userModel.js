const connection = require('./connection');

const create = async (name, email, password) => {
  const db = await connection();

  const user = {
    name,
    email,
    password,
    role: 'user',
  };

  const newUser = await db.collection('users').insertOne(user);

  return { user: { name, email, role: 'user', _id: newUser.insertedId } };
};

const findUserByEmail = async (email) => {
  const db = await connection();
  
  const user = await db.collection('users').findOne({ email });

  return user;
};

module.exports = {
  create,
  findUserByEmail,
};