// Require mongoose
const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

// Définir le schéma du produit
const produitSchema = new mongoose.Schema({
  nomproduit: {
    type: String, 
  },
  description: {
    type: String, 
  },
  prix: {
    type: Number, 
  },
  image: {
    type: String,  
  }
});

// Créer le modèle "Produit" à partir du schéma
const Produit = mongoose.model('produits', produitSchema);

// Exporter le modèle
module.exports = Produit;
