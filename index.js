require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./helpers/errorHandler");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", productRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
console.log("Servidor corriendo en http://localhost:" + process.env.PORT);
});