const router = require("express").Router();

const AuthRoutes = require("./AuthRoutes");
const ProductRoutes = require("./ProductRoutes");
const StockRoutes = require("./StockRoutes");

router.use("/auth", AuthRoutes);
router.use("/product", ProductRoutes);
router.use("/stock", StockRoutes);

module.exports = router;
