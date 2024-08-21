const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sale = new Schema({
    quantity: {
        type: Number,
        min: 1,
        max: 10,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "products",
    },
    total: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("sales", Sale);