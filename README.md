# 📘 Documentação do Projeto

## 📌 Visão Geral

Projeto desenvolvido para a disciplina de Desenolvimento Web Fullstack

## 📂 Estrutura do Projeto

```bash
/projeto
│── backend/   # API e banco de dados
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── server.js/
│   │── package.json
│   │── .env
│── frontend/  # Interface do usuário
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── helpers/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── globals.css
│   │   ├── main.jsx
│   │   ├── routes.jsx
│   │── package.json
│   │── vite.config.js
│── README.md

```

## 🚀 Tecnologias Utilizadas

### **Backend**

- Node.js + Express
- SQLite
- Prisma como ORM
- JWT para autenticação
- bcrypt para criptografia de senhas
- express-validator para validação

### **Frontend**

- React
- Vite
- Styled Components
- Axios
- React Router Dom
- React Icons

## 📦 Como Rodar o Projeto

### 🔹 Pré-requisitos:

**Node e Redis:**

**Executando o Redis com Docker:**
Caso não tenha o Redis instalado localmente, você pode iniciá-lo com o seguinte comando:

```sh
docker run --name redis-container -d -p 6379:6379 redis
```

### **Clone o repositório e entre na pasta do projeto:**

```sh
git clone https://github.com/DiegoOtani/Showflix.git
cd Showflix

```

### **Backend:**

1. Instale as dependências:

    ```sh
    cd backend
    npm install
    ```

2. Configure o arquivo .env:

    ```ini
    DATABASE_URL="file:./dev.db"
    PORT=5000
    JWT_SECRET=chave_jwt
    ```

3. Rode o servidor:
    ```sh
    npm run dev
    ```

### **Frontend:**

1. Instale as dependências:

    ```sh
    cd frontend
    npm install
    ```

2. Inicie o projeto:

    ```sh
    npm run dev
    ```

## 📌 API Endpoints

### 📂 Autenticação

#### 🔹 Login
- URL: /users/login
- Método: POST
- Descrição: Autentica o usuário e retorna um token JWT.

#### 🔹 Registrar Usuário

- URL: /users
- Método: POST
- Descrição: Cria um novo usuário.


### 📂 Gerenciamento de TvShows

| Método  | Rota            | Descrição                 |
|---------|----------------|---------------------------|
| `GET`   | `/tvshows`    | Lista todos os Shows      |
| `GET`   | `/tvshows/:name` | Busca os Shows que contém esse nome     |
| `GET`   | `/genres` | Lista os gêneros  |
| `POST` | `/tvshows` | Adiciona um Show   |

## 🛡️ Segurança

- Senhas criptografadas com bcrypt
- Tokens JWT com expiração
- Limite de requisições no login (express-rate-limit)
- Validação de entradas (express-validator)
- Segurança nas queries

## 👥 Equipe
- Diego Otani