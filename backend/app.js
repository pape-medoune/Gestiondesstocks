const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const PORT = 4400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { serializeInteger } = require("whatwg-url");
const cors = require("cors");
const helmet = require('helmet');
const app = express();
const produit = require('./models/produits');
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

app.use(bodyParser.json())
app.use(express.json());
const connectDB = require("./db.Js");
const connectToDatabase = require("./db.Js");
const MongoDB_URI = 'mongodb://127.0.0.1:27017/gestion_des_stocks';

connectToDatabase();

//Ajout d'un nouveau produit sur la base de donnée 

app.post("/ajoutproduit",(req,res)=>{
  produit = new produit.produit(
    {
      nomproduit: req.body.nomproduit,
      description: req.body.description,
      prix: req.body.prix, 
      image: req.body.image,
    }
  )

  produit.save(gestionstock)
  .then(()=>{console.log("Produit sauvegarder avec succés !");})
  .catch(e=>{console.log(e);})
});

//Visualiser tous nos produits
// app.get('/lesproduits',(req,res)=>{
//   const dbname="gestionstock";
//   const dbn = client.db(dbname);
//   dbn.collection("produits").find().toArray().then(((err,result)=>
//   {

//     if(err)
//     {
//       console.log(err);
//     }else{
//       console.log("L'affichage s'est fait avec succés");
//       res.send(result);
//     }
//   }))
// });

// axios.get(url,params)
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.error(err); 
// })

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



// // app.get("/affichage", (req, res) => {
// //   const collection = mongoose.connection.db.collection(collectionName);

// //   collection.find().toArray((err, results) => {
// //     if (err) {
// //       console.log("erreur lors de l'affichage", err);
// //       res.status(500).json({ error: "Error fetching data" });
// //     } else {
// //       res.status(200).json(results);
// //     }
// //   });
// // });

// app.post('/ajout', async (req, res) => {
//   try {
//     const { nom, description, prix, image } = req.body;
//     const client = await MongoClient.connect(MongoDB_URI);
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Insérer le produit dans la base de données
//     await collection.insertOne({ nom, description, prix, image });

//     res.sendStatus(201); // Réponse 201 Created
//     client.close();
//   } catch (error) {
//     console.error('Erreur lors de l\'insertion :', error);
//     res.sendStatus(500); // Réponse 500 Internal Server Error
//   }
// });


app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});