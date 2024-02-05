const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const championSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  habilidades: [
    {
      nombre: String,
      descripcion: String,
    },
  ],
});

const Champion = mongoose.model("Champion", championSchema);
module.exports = Champion;
