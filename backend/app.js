require('./models/db'); 
const cors = require("cors");
const helmet = require('helmet');
const express =require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const route = require("./Routes/routers.js");



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

app.use("/",route);


app.listen(4400,()=>{
    console.log('Express server started at port : 4400');
}) 