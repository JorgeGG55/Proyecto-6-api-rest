const express = require("express");
const Champion = require("../models/Champion");
const router = express.Router();

// GET - Obtener todos los campeones
router.get("/", async (req, res) => {
  try {
    const champions = await Champion.find();
    res.json(champions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Obtener un campeón por su ID
router.get("/:id", async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id);
    if (!champion) {
      return res.status(404).json({ message: "Campeón no encontrado" });
    }
    res.json(champion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Crear un nuevo campeón
router.post("/create", async (req, res) => {
  const champion = new Champion(req.body);
  try {
    const newChampion = await champion.save();
    res.status(201).json(newChampion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT - Editar un campeón por su ID
router.put("/edit/:id", async (req, res) => {
  try {
    const champion = await Champion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!champion) {
      return res.status(404).json({ message: "Campeón no encontrado" });
    }
    res.json(champion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Borrar un campeón por su ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const champion = await Champion.findByIdAndDelete(req.params.id);
    if (!champion) {
      return res.status(404).json({ message: "Campeón no encontrado" });
    }
    res.json({ message: "Campeón eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
