const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const dbName="gestionstock";
const collectionName = "produits";
const PORT = 4400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { serializeInteger } = require("whatwg-url");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Les méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // Les en-têtes autorisés
}));

app.use(bodyParser.json())
app.use(express.json());
const connectDB = require("./db.Js");
const connectToDatabase = require("./db.Js");
const MongoDB_URI = 'mongodb+srv://medoune:NkfNWT96ROhNKdud@cluster0.fb9utbr.mongodb.net/gestion_des_stocks';

connectToDatabase();

app.get("/affichage", (req, res) => {
  const collection = mongoose.connection.db.collection(collectionName);

  collection.find({}).toArray((err, results) => {
    if (err) {
      console.log("erreur lors de l'affichage", err);
      res.status(500).json({ error: "Error fetching data" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/ajout", (req, res) => {
  const { nom, description, prix } = req.body;

  const image = req.file ? req.file.path : '';

  const collection = mongoose.connection.db.collection(collectionName);

  collection.insertOne({ nom, description, prix, image }, (err, result) => {
    if (err) {
      console.log("erreur lors de l'insertion", err);
      res.status(500).json({ error: "Error inserting data" });
    } else {
      res.status(201).json(result.ops[0]);
    }
  });
});   




app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});