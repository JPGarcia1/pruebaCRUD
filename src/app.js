const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors());

//Importar rutas
const productRoutes = require('./routes/product.routes');
const saleRoutes = require("./routes/sale.routes");
require("dotenv").config();

//conectarnos a mongoose
mongoose.connect(process.env.DB_URL)
.then((db) => console.log("DB Connected"))
.catch((err) => console.log(err));

//configuraciones
app.use(express.urlencoded({ extended: false}));

//configurar rutas
app.get("/", function (req,res) {
    res.send("Hello from vercel");
});
app.use("/products", productRoutes);
app.use("/sales", saleRoutes);

app.listen(3000, () => {
    console.log("Server Running");
});