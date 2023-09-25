require('./models/db'); 
const cors = require("cors");
const helmet = require('helmet');
const express =require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://127.0.0.1:27017/gestionstock");

const productController =require('./controllers/productController');

var app= express();

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
 
app.use(express.json());

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.use(express.json());

app.get('/display', (req, res) => {
  const dbname = 'gestionstock';
  const dbn = client.db(dbname);

  dbn
    .collection('produits')
    .find()
    .toArray()
    .then((result) => {
      console.log("L'affichage s'est fait avec succès");
      // Send the result as a response to the client
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      // Handle the error and send an error response if necessary
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.post("/add",(req,res)=>{
  const dbname = 'gestionstock';
  const dbn = client.db(dbname);

  const {nomproduit,description,prix,image} = req.body;

  console.log(req.body);
  dbn
    .collection('produits')
    .insertOne({nomproduit,description,prix,image})
    .then((result) => {
      console.log("L'insertion s'est fait avec succès");
   
      res.json(result); 
      res.redirect('/orders')
    })
    .catch((err)=>{
      console.log("Erreur lors de l'insertion: "+err);
    })
    
})



app.listen(4400,()=>{
    console.log('Express server started at port : 4400');
}) 