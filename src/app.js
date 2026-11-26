
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conectarBanco = require("./config/database");
const npcRoutes = require("./routes/npcRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Rota principal dos NPCs
app.use("/api/npcs", npcRoutes);

// Rota inicial para verificar se a API está funcionando
app.get("/", (req, res) => {
  res.json({
    mensagem: "API NPC Hub funcionando!",
  });
});

// Conectar ao banco e iniciar o servidor
const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  await conectarBanco();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

iniciarServidor();
