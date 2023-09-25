const express = require('express');
const router = express.Router();
const product = require("../controllers/productController");

const app = express();


router.post("/add",product.insertProduct);
router.get("/display",product.displayProduct);

module.exports = router