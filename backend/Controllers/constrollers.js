const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const dbName="crud";
const mongoUrl="mongodb://localhost:27017"
const collectionName = "produits";
const PORT = 4400;

const app = express();

function ajouter()
{

    const [nomProduit,description,prix,image] = req.body;
    mongoClient.connect(mongoUrl,(err)=>{
        if(err)
        {
            res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.insertOne([nomProduit,description,prix,image],(err,resultats)=>{
            if(err)
            {
                res.send("Erreur lors de l'insertion!");
            }else{
                const json = json(resultat);
                res.send(json);
            }

            client.close();
        })
    })
}

module.exports = ajouter;

function modifier()
{
    const {id} = req.params;
    const [nomProduit,description,prix,image] = req.body;
    mongoClient.connect(mongoUrl,(err)=>{
        if(err)
        {
            res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.findOneAndUpdate([id,nomProduit,description,prix,image],(err,resultats)=>{
            if(err)
            {
                res.send("Erreur lors de la mise à jours");
            }else{
                const json = json(resultat);
                res.send(json);
            }

            client.close();
        })
    })
}

module.exports = modifier;

function supprimer()
{
    const {id} = req.params;
    mongoClient.connect(mongoUrl,(err)=>{
        if(err)
        {
            res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.findOneAndDelete([id],(err,resultats)=>{
            if(err)
            {
                res.send("Erreur lors de le suppression!");
            }else{
                res.send("La suppression s'est fait avec succés!");
            }

            client.close();
        })
    })
}

module.exports = supprimer;
