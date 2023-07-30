const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const dbName="gestionstock";
const collectionName = "produits";
const collectionName2 = "admin";
const PORT = 4400;
const mongoUrl="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1"

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
    mongoClient.connect(mongoUrl,(err,client)=>{
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
                const json = json(resultats);
                res.send(json);
            }

            client.close();
        })
    })});

    app.put("/update:id",(req,res)=>{
        const {id} = req.params;
        const {nomProduit,description,prix,image} = req.body;
        mongoClient.connect(mongoUrl,(err,client)=>{
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
                    const json = json(resultats);
                    res.send(json);
                }
    
                client.close();
            })
        })
    }
    )

    app.delete("/delete:id",(req,res)=>{
        const {id} = req.params; 
        mongoClient.connect(mongoUrl,(err,client)=>{
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
                    const json = json(resultats);
                    res.send(json);
                }
    
                client.close();
            })
        })
    }
    )


    app.get("/admingetid",(req,res)=>{

        mongoClient.connect(mongoUrl,(err,client)=>{
            if(err)
            {
                res.send("Nous avons rencontré une erreur lors de la connexion avec votre base de donnée!");
            }
    
            const db = client.db(dbName);
            const collection = db.collection(collectionName2);
    
            collection.find().toArray((err,resultats)=>{
                if(err)
                {
                    res.send("Erreur lors de l'affichage!");
                }else{
                    const json = json(resultats);
                    res.send(json);
                }
    
                client.close();
            })
        })});
app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});