const Router = require("express").Router();
const SalesController = require("../controllers/sales.controller");

Router.get("/", SalesController.list);
Router.post("/", SalesController.create);

module.exports = Router;