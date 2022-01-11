
# Boas vindas ao repositório do projeto Cookmaster!

## Por que gosto desse projeto?

Nesse projeto, tive a oportunidade de:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.


## Instalação

1. Clone o repositório:

- `git clone https://github.com/ntozato/cookmaster.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd cookmaster`

2. Instale as dependências:

- `npm install`

3. Inicie o projeto com `npm start


## Rotas disponiveis

POST/users cadastra usuário
espera no body:

{
  "name": "userName",
  "email": "email@email.com",
  "password": "userPassword",
}

POST/login realiza login e retorna token JWT
espera no body:

{
  "email": "email@email.com",
  "password": "userPassword",
}

GET/recipes retorna todas as receitas
GET/recipes/ID retorna uma receita especifica
PUT/recipes/ID atualiza receita especifica, valida token JWT
espera no body:

{
  "name": "recipeName",
  "ingredients": "ingredientsList",
  "preparation": "preparationSteps",
}

PUT/recipes/ID/image cadastra imagem de receita ja existente, valida token JWT
espera no body: form-data, KEY image e tipo jpeg

POST/recipes cadastra uma receita, valida token JWT
espera no body:

{
  "name": "recipeName",
  "ingredients": "ingredientsList",
  "preparation": "preparationSteps",
}

DELETE/recipes/ID excluir uma receita, valida token JWT

