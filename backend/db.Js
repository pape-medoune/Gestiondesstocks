const mongoose = require("mongoose");

async function connectToDatabase(err,client) {
    try {
      await mongoose.connect('mongodb+srv://medoune:NkfNWT96ROhNKdud@cluster0.fb9utbr.mongodb.net/gestion_des_stocks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connecté à la base de données MongoDB !');
    } catch (error) {
      console.error('Erreur de connexion à la base de données :', error);
    }
  }

  module.exports = connectToDatabase;