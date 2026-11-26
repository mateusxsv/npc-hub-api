
const Npc = require("../models/Npc");

// Listar todos os NPCs
async function listarNpcs(req, res) {
  try {
    const npcs = await Npc.find();

    return res.status(200).json(npcs);
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao listar NPCs.",
    });
  }
}

// Buscar um NPC pelo ID
async function buscarNpc(req, res) {
  try {
    const npc = await Npc.findById(req.params.id);

    if (!npc) {
      return res.status(404).json({
        mensagem: "NPC não encontrado.",
      });
    }

    return res.status(200).json(npc);
  } catch (erro) {
    return res.status(400).json({
      mensagem: "ID inválido.",
    });
  }
}

// Cadastrar um NPC
async function criarNpc(req, res) {
  try {
    const { nome, vida, descricao, campanha, categoria } = req.body;

    const novoNpc = await Npc.create({
      nome,
      vida,
      descricao,
      campanha,
      categoria,
    });

    return res.status(201).json(novoNpc);
  } catch (erro) {
    return res.status(400).json({
      mensagem: "Erro ao cadastrar NPC.",
      erro: erro.message,
    });
  }
}

// Atualizar um NPC
async function atualizarNpc(req, res) {
  try {
    const { nome, vida, descricao, campanha, categoria } = req.body;

    const npcAtualizado = await Npc.findByIdAndUpdate(
      req.params.id,
      {
        nome,
        vida,
        descricao,
        campanha,
        categoria,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!npcAtualizado) {
      return res.status(404).json({
        mensagem: "NPC não encontrado.",
      });
    }

    return res.status(200).json(npcAtualizado);
  } catch (erro) {
    return res.status(400).json({
      mensagem: "Erro ao atualizar NPC.",
      erro: erro.message,
    });
  }
}

// Excluir um NPC
async function excluirNpc(req, res) {
  try {
    const npcExcluido = await Npc.findByIdAndDelete(req.params.id);

    if (!npcExcluido) {
      return res.status(404).json({
        mensagem: "NPC não encontrado.",
      });
    }

    return res.status(200).json({
      mensagem: "NPC excluído com sucesso.",
    });
  } catch (erro) {
    return res.status(400).json({
      mensagem: "Erro ao excluir NPC.",
    });
  }
}

module.exports = {
  listarNpcs,
  buscarNpc,
  criarNpc,
  atualizarNpc,
  excluirNpc,
};
