// Require mongoose
const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

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
    type: String, 
    required: true
  }
});

// Créer le modèle "Produit" à partir du schéma
const Produit = mongoose.model('gestionstock', produitSchema);

// Exporter le modèle
module.exports = Produit;
