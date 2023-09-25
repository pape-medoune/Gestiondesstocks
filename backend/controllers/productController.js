var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

client = new MongoClient("mongodb://127.0.0.1:27017/gestionstock");

const mongoose = require("mongoose");
const products = require("../models/product.model");

function insertProduct(req, res) {

  const nom = req.body.nomproduit;
  const description = req.body.description; 
  const prix=req.body.prix;
  const image=req.body.image;
  

  // console.log(nom);
  // console.log(description);
  // console.log(prix);
  // console.log(image);
  // const { nomproduit, description, prix, image } = req.body;
  const dbName = "gestionstock";
  const dbn = client.db(dbName);
  const collection = dbn.collection("produits");

  collection.insertOne({ nom, description, prix, image }, (err, result) => {
    if (err) {
      console.log("erreur lors de l'insertion", err);
      res.status(500).json({ error: "Error inserting data" });
    } else {
      res.status(201).json(result);
    }
  });
}

function displayProduct(req, res) {
 
    const dbname = "gestionstock";
    const dbn = client.db(dbname);
    dbn
      .collection("produits")
      .find()
      .toArray()
      .then((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("L'affichage s'est fait avec succés");
          res.send(result);
        }
      }); 
}

// router.get('/',(req,res)=>{
//     res.render('employee/addOrEdit',{
//         viewTitle:"Insert Employee"
//     });
// })

// router.post('/',(req,res)=>{
//     if(req.body.id =='')
//     insertRecord(req,res)
//      else{
//     updateRecord(req,res)
// }
// });

// function updateRecord(req,res){

//     Employee.findOneAndUpdate({ _id: req.body.id}, req.body, {new: true}, (err,doc)=>{
//         if(!err){
//             res.redirect('/employee/list');
//         }
//         else{
//             console.log("Error during record update"+err)
//         }
//     })
// }
// function insertProduct(req, res) {
//   // Create a new instance of the Product model
//   const newProduct = new products({
//     nomproduit: req.body.nom,
//     description: req.body.description,
//     prix: req.body.prix,
//     image: req.body.image,
//   });
// console.log(newProduct);
//   // Save the new product to the database
// //   newProduct.save()
// //     .then(result => {
// //       console.log("Insertion réussie :", result);
// //       res.status(201).json(result); // Respond with the saved product
// //     })
// //     .catch(err => {
// //       console.error("Erreur lors de l'insertion :", err);
// //       res.status(500).json({ error: 'Erreur lors de l\'insertion' }); // Respond with an error
// //     });
// }

// router.get('/list',(req,res)=>{
//  //   res.json('from list');
//     Employee.find((err,docs)=>{
//         if(!err){
//             res.render("employee/list",{
//                 list: docs
//             });
//         }
//         else{
//             console.log("Error in retrieving employee list :"+err)
//         }
//     })
// })

// router.get('/:id',(req,res)=>{
//     Employee.findById(req.params.id, (err,doc)=>{
//         if(!err){
//             res.render("employee/addOrEdit",{
//                 viewTitle: "Update Employee",
//                 employee: doc
//             })
//         }
//     })
// })

// router.get('/delete/:id',(req,res)=>{
//     Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
//         if(!err)
//             res.redirect('/employee/list')
//         else
//         console.log("error in employee delete"+err)
//     });
// })
module.exports = { insertProduct,displayProduct };
