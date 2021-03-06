const express = require("express");
const Route = express.Router();

// const { authentication, authorization } = require("../helpers/auth");

const {
    readPurchase,
    purchase
} = require("../controllers/purchase");

Route
    .get("/", readPurchase)
    .get("/:purchaseId", readPurchase)
    .post("/", purchase)

module.exports = Route;
