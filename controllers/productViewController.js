const Product = require("../models/Product");
const baseHtml = require("../helpers/baseHtml");
const getNavBar = require("../helpers/getNavBar");
const getProductCards = require("../helpers/template");

exports.showProducts = async (req, res) => {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;

  const products = await Product.find(filter);
  const html = baseHtml(
    getNavBar() +
    "<h1>Productos</h1>" +
    getProductCards(products, true)
  );

  res.send(html);
};

exports.showDashboard = async (req, res) => {
  const products = await Product.find();
  const html = baseHtml(
    getNavBar() +
    "<h1>Dashboard</h1>" +
    getProductCards(products)
  );

  res.send(html);
}

exports.showProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.send("<h1>Producto no encontrado</h1>");

  const html = baseHtml(
    getNavBar() +
    `<h1>${product.name}</h1>
     <img src="${product.image}" width="300">
     <p>${product.description}</p>
     <p>Precio: ${product.price} €</p>
     <p>Categoría: ${product.category}</p>
     <p>Talla: ${product.size}</p>
     <a href="/products/view">Volver</a>`
  );

  res.send(html);
};