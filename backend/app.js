require('./models/db');

const express =require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const route = require("./Routes/routers.js");



const productController =require('./controllers/productController');

var app= express();

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.use(express.json());

app.use("/",route);


app.listen(4400,()=>{
    console.log('Express server started at port : 4400');
}) 