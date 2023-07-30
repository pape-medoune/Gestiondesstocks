const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const dbName="crud";
const collectionName = "produits";
const PORT = 4400;

const app = express();