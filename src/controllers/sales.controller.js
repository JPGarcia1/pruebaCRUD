const Sale = require("../models/sale.model")
const Product = require("../models/product.model")

const salesController = {
    list: async function (req, res) {
        try {
            const sales = await Sale.find();
            res.status(200).json({sales: sales});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    create: async function (req, res) {
        try {
            const sale = new Sale(req.body);
            const product = new Product.findById(req.body.product);
            sale.total = sale.quantity * product.price;
            await sale.save();
            // res.satus(200).json(req.body);
            res.status(200).json({ sale: sale});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = salesController;