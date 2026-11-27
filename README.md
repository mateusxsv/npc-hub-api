# ⚔️ NPC HUB API — Backend

A **NPC HUB API** é o backend do projeto NPC HUB, responsável pelo gerenciamento e armazenamento dos NPCs (Personagens Não Jogáveis) utilizados em campanhas de RPG.

Desenvolvida em Node.js, Express e MongoDB, a API disponibiliza endpoints REST para realizar operações de cadastro, consulta, atualização e exclusão de personagens.

## ✨ Funcionalidades

- Cadastrar novos NPCs.
- Listar todos os NPCs cadastrados.
- Consultar um NPC específico pelo seu ID.
- Atualizar as informações de um NPC.
- Excluir NPCs cadastrados.
- Armazenar os dados utilizando MongoDB.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon

## 📋 Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB Atlas](https://www.mongodb.com/atlas) ou uma instância local do MongoDB
- Git

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/mateusxsv/npc-hub-api
```

### 2. Entrar na pasta do projeto

```bash
cd npc-hub-api
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Na raiz do projeto, crie um arquivo `.env`:

```env
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
```

Substitua `sua_string_de_conexao_mongodb` pela URL de conexão do seu banco de dados MongoDB.

**Importante:** não compartilhe o arquivo `.env` nem envie suas credenciais para o GitHub.

### 5. Executar o servidor

Para iniciar em modo de desenvolvimento:

```bash
npm run dev
```

Para iniciar normalmente:

```bash
npm start
```

Se a conexão estiver funcionando, o terminal apresentará mensagens semelhantes a:

```text
MongoDB conectado com sucesso!
Servidor rodando na porta 3000
```

## 🔗 Endpoints da API

A API utiliza a rota base:

```text
http://localhost:3000/api/npcs
```

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| GET | `/api/npcs` | Lista todos os NPCs |
| GET | `/api/npcs/:id` | Busca um NPC pelo ID |
| POST | `/api/npcs` | Cadastra um novo NPC |
| PUT | `/api/npcs/:id` | Atualiza um NPC |
| DELETE | `/api/npcs/:id` | Exclui um NPC |

### Exemplo de cadastro

**POST** `/api/npcs`

Corpo da requisição (JSON):

```json
{
  "nome": "Benício Silveiro",
  "vida": 6,
  "descricao": "Um nerdzinho que gosta de RPG e de filmes Slasher.",
  "campanha": "Noite do Massacre",
  "categoria": "Aliado"
}
```

### Estrutura dos dados de um NPC

| Campo | Tipo | Descrição |
|---|---|---|
| nome | String | Nome do personagem |
| vida | Number | Pontos de vida |
| descricao | String | Descrição do personagem |
| campanha | String | Campanha à qual pertence |
| categoria | String | Classificação do NPC |

Cada registro também possui um identificador `_id` e os campos de data `createdAt` e `updatedAt`, gerados automaticamente pelo Mongoose.

## 📁 Estrutura do projeto

```text
npc-hub-api/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── npcController.js
│   │
│   ├── models/
│   │   └── Npc.js
│   │
│   ├── routes/
│   │   └── npcRoutes.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 📱 Integração com o frontend

Este backend é consumido pelo aplicativo mobile NPC HUB, desenvolvido com React Native e Expo.

**Repositório do frontend:** https://github.com/mateusxsv/npc-hub

## 🎓 Projeto acadêmico

Projeto desenvolvido como atividade acadêmica com o objetivo de praticar a criação de APIs REST, operações CRUD, integração com banco de dados MongoDB e comunicação entre backend e aplicativo mobile.