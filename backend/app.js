const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const dbName="gestion_des_stocks";
const collectionName = "produits";
const PORT = 4400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { serializeInteger } = require("whatwg-url");
const cors = require("cors");
const helmet = require('helmet');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Les méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // Les en-têtes autorisés
}));

app.use(helmet());

const cspConfig = {
  directives: {
    defaultSrc: ["'self'", "http://localhost:4400"],
    imgSrc: ["'self'", "http://localhost:4400"],
  },
};

app.use(helmet.contentSecurityPolicy(cspConfig));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  next()
})

app.use(bodyParser.json())
app.use(express.json());
const connectDB = require("./db.Js");
const connectToDatabase = require("./db.Js");
const MongoDB_URI = 'mongodb+srv://medoune:NkfNWT96ROhNKdud@cluster0.fb9utbr.mongodb.net/gestion_des_stocks';

connectToDatabase();

app.get('/affichage', async (req, res) => {
  try {
    const client = await MongoClient.connect(MongoDB_URI);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const records = await collection.find().toArray();
    res.send(records);

    client.close();
  } catch (error) {
    console.error('Error occurred while retrieving the records:', error);
    res.status(500).send('An error occurred while retrieving the records');
  }
});



// app.get("/affichage", (req, res) => {
//   const collection = mongoose.connection.db.collection(collectionName);

//   collection.find().toArray((err, results) => {
//     if (err) {
//       console.log("erreur lors de l'affichage", err);
//       res.status(500).json({ error: "Error fetching data" });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

app.post('/ajout', async (req, res) => {
  try {
    const { nom, description, prix, image } = req.body;
    const client = await MongoClient.connect(MongoDB_URI);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insérer le produit dans la base de données
    await collection.insertOne({ nom, description, prix, image });

    res.sendStatus(201); // Réponse 201 Created
    client.close();
  } catch (error) {
    console.error('Erreur lors de l\'insertion :', error);
    res.sendStatus(500); // Réponse 500 Internal Server Error
  }
});


app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});