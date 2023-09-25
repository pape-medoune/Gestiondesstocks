const express = require('express');
const router = express.Router();
const insertProduct = require("../controllers/productController.js");

const app = express();


router.post("/add",insertProduct.insertProduct);

module.exports = router