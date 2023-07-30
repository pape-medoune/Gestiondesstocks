const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const dbName="crud";
const collectionName = "produits";
const PORT = 4400;
const mongoUrl="mongodb://localhost:27017"

const app = express();


mongoClient.connect(mongoUrl,(err,client)=>{
    if(err)
    {
        console.log("Erreur lors de la connexion avec la base de donnée!");
    }
    else
    {
        console.log("Connexion fait, avec succés!");
        const db = client.db(dbName);
    }
})

app.post("/ajout",(req,res)=>{

    const {nomProduit,description,prix,image} = req.body;
    mongoClient.connect(mongoUrl,(err)=>{
        if(err)
        {
            res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.insertOne({nomProduit,description,prix,image},(err,resultats)=>{
            if(err)
            {
                res.send("Erreur lors de l'insertion!");
            }else{
                const json = json(resultat);
                res.send(json);
            }

            client.close();
        })
    })});

    app.put("/update",(req,res)=>{
        const {id} = req.params;
        const {nomProduit,description,prix,image} = req.body;
        mongoClient.connect(mongoUrl,(err)=>{
            if(err)
            {
                res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
            }
    
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
    
            collection.findOneAndUpdate({_id: id},{$set:{nomProduit,description,prix,image}},(err,resultats)=>{
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
    )

    app.delete("/delete",(req,res)=>{
        const {id} = req.params; 
        mongoClient.connect(mongoUrl,(err)=>{
            if(err)
            {
                res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
            }
    
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
    
            collection.findOneAndUpdate({_id: id},{$set:{nomProduit,description,prix,image}},(err,resultats)=>{
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
    )

app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});