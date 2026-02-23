const express = require("express");
const router = express.Router();

const { 
  createProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} = require("../controllers/productController");

const viewController = require("../controllers/productViewController");

router.get("/view", viewController.showProducts);
router.get("/dashboard", viewController.showDashboard);
router.get("/view/:id", viewController.showProductById);

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;