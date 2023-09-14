// Require mongoose
const mongoose = require('mongoose');

// Définir le schéma du produit
const produitSchema = new mongoose.Schema({
  nomproduit: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  image: {
    type: String, // Vous pouvez utiliser le type Buffer si vous souhaitez stocker l'image en tant que données binaires
    required: true
  }
});

// Créer le modèle "Produit" à partir du schéma
const Produit = mongoose.model('Produit', produitSchema);

// Exporter le modèle
module.exports = Produit;
