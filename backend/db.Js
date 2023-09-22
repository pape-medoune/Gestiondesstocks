const mongoose = require("mongoose");

 function connectToDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/gestionstock')
    .then(()=>{console.log("Connectionn reuissit!");})
    .catch((err)=>{console.log(err);})
  }

  module.exports = connectToDatabase;