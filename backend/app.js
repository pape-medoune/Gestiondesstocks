const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const PORT = 4400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { serializeInteger } = require("whatwg-url");
const cors = require("cors");
const helmet = require('helmet');
const app = express();
const Produit = require('./models/produits');
const db = require("./db.Js"); 
const client = new MongoClient("mongodb://127.0.0.1:27017/gestionstock");
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

app.use(bodyParser.json());
app.use(express.json());
const connectDB = require("./db.Js");
const connectToDatabase = require("./db.Js"); 

connectToDatabase();

//Ajout d'un nouveau produit sur la base de donnée 
app.post("/ajoutproduit", async (req, res) => {
  const { nomproduit, description, prix, image } = req.body;

  try {
    let newProduit = new Produit({
      nomproduit,
      description,
      prix,
      image
    });

    savedProduit=await newProduit.save();

    if (savedProduit) {
      console.log("Produit sauvegardé avec succès:", savedProduit);
      return res.status(201).json(savedProduit);
    } else {
      throw new Error("Failed to save the product.");
    }
  } catch (error) {
    console.error("Erreur lors de la sauvegarde du produit:", error.message);
    return res.status(500).json({ error: error.message });
  }
});




//Visualiser tous nos produits

app.get('/lesproduits', async (req, res) => {
  try {
    const dbName = "gestionstock"
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017/gestionstock");
    const db = client.db(dbName);
    const collection = db.collection("produits");

    const records = await collection.find().toArray();
    res.send(records);

    client.close();
  } catch (error) {
    console.error('Error occurred while retrieving the records:', error);
    res.status(500).send('An error occurred while retrieving the records');
  }
});


//Mise à jours de mes produits 
app.put("/updateproduit:id",(req,res) =>{
  const id = req.query.id;
  connectToDatabase();
  const {nomproduit,description,prix,image} = req.body;
  const produit = new produit(
    {
      nomproduit: req.body.nomproduit,
      description: req.body.description,
      prix: req.body.prix, 
      image: req.body.image,
    }
  )
  produit.findByIdAndUpdate(id,{nomproduit,description,prix,image},(err,result)=>{
    if(err){
      console.log("Erreurrrrrr:"+err);
    }else{
      res.send(result);
    }
  })
})




app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});