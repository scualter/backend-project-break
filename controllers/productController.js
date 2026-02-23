const Product = require("../models/Product");

exports.createProduct = async (req, res) => {

try {

const newProduct = new Product({
name: req.body.name,
description: req.body.description,
image: req.body.image, 
category: req.body.category,
size: req.body.size,
price: req.body.price
});

await newProduct.save();
res.status(201).json(newProduct);
} catch (error) {

next(error);

}

};

exports.getAllProducts = async (req, res) => {

try {

const filter = {};

if (req.query.category) {

filter.category = req.query.category;

}

const products = await Product.find(filter);

res.json(products);

} catch (error) {

res.status(500).json({

error: "Error obteniendo productos"

});

}

};

exports.getProductById = async (req, res) => {

try {

const product = await Product.findById(req.params.id);

if (!product) {

return res.status(404).json({
error: "Producto no encontrado"
});

}

res.json(product);

} catch (error) {

res.status(500).json({
error: "Error obteniendo producto"
});

}

};

exports.deleteProduct = async (req, res) => {

try {

await Product.findByIdAndDelete(req.params.id);

res.json({
message: "Producto eliminado"
});

} catch (error) {

res.status(500).json({
error: "Error eliminando producto"
});

}

};

exports.updateProduct = async (req, res) => {

try {

const updatedProduct = await Product.findByIdAndUpdate(

req.params.id,

req.body,

{ new: true }

);

res.json(updatedProduct);

} catch (error) {

res.status(500).json({
error: "Error actualizando producto"
});

}

};