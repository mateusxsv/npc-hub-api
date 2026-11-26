
const express = require("express");
const router = express.Router();

const npcController = require("../controllers/npcController");

router.get("/", npcController.listarNpcs);
router.get("/:id", npcController.buscarNpc);
router.post("/", npcController.criarNpc);
router.put("/:id", npcController.atualizarNpc);
router.delete("/:id", npcController.excluirNpc);

module.exports = router;
