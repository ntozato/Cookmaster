const bodyParser = require('body-parser');
const express = require('express');
const app = require('./app');
const userController = require('../controllers/userController');
const userMiddlewares = require('../middlewares/userMiddlewares');
const login = require('../auth/login');
const recipeController = require('../controllers/recipeController');
const recipeMiddlewares = require('../middlewares/recipeMiddlewares');
const validateJWT = require('../auth/validateJWT');
const upload = require('../middlewares/uploadImage');

app.use(bodyParser.json());

app.use('/images', express.static('src/uploads'));

app.get('/recipes', recipeController.getAll);
app.get('/recipes/:id', recipeMiddlewares.validateObjectId, recipeController.getById);
app.post('/users', userMiddlewares.validateEmail, userController.create);
app.post('/login', userMiddlewares.validateLogin, login);
app.post('/recipes', validateJWT, recipeController.create);
app.put('/recipes/:id/image', validateJWT, upload, recipeController.insertImage);
app.put('/recipes/:id', validateJWT, recipeController.update);
app.delete('/recipes/:id', validateJWT, recipeController.exclude);

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
