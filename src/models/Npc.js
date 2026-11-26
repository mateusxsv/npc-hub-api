
const mongoose = require("mongoose");

const npcSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },

    vida: {
      type: Number,
      required: true,
      min: 0,
    },

    descricao: {
      type: String,
      required: true,
      trim: true,
    },

    campanha: {
      type: String,
      default: "",
      trim: true,
    },

    categoria: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Npc = mongoose.model("Npc", npcSchema);

module.exports = Npc;
