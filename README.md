
# Boas vindas ao repositório do projeto Cookmaster!

## Por que gosto desse projeto?

Nesse projeto, tive a oportunidade de:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Construir a aplicação utilizando arquitetura MSC


## Instalação

1. Clone o repositório:

- `git clone https://github.com/ntozato/cookmaster.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd cookmaster`

2. Instale as dependências:

  - `npm install`

3. Inicie o projeto:

  - `npm start`


## Rotas disponíveis

### POST/users
  - cadastra usuário
  - espera no body:

{
  "name": "userName",
  "email": "email@email.com",
  "password": "userPassword",
}

### POST/login
 - realiza login e retorna token JWT
 - espera no body:

{
  "email": "email@email.com",
  "password": "userPassword",
}

### GET/recipes
  - retorna todas as receitas

### GET/recipes/id
  - retorna uma receita especifica
### PUT/recipes/id
  - atualiza receita especifica, valida token JWT
  - espera no Header: `authorization: "token gerado no login"`
  - espera no body:

{
  "name": "recipeName",
  "ingredients": "ingredientsList",
  "preparation": "preparationSteps",
}


### PUT/recipes/id/image
  - cadastra imagem de receita ja existente, valida token JWT
  - espera no Header: `authorization: "token gerado no login"`
  - espera no body: form-data, KEY image e tipo jpeg

### POST/recipes
  - cadastra uma receita, valida token JWT
  - espera no Header: `authorization: "token gerado no login"`
  - espera no body:

{
  "name": "recipeName",
  "ingredients": "ingredientsList",
  "preparation": "preparationSteps",
}

### DELETE/recipes/id
  - espera no Header: `authorization: "token gerado no login"`
  - exclui uma receita, valida token JWT
