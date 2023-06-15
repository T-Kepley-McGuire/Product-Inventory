const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const productService = require("./products.service");

async function productExists(req, res, next) {
  const product = await productService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }

  next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

async function list(req, res, next) {
  const products = await productService.list();
  res.json({ products });
}

async function listOutOfStockCount(req, res, next) {
  const outOfStock = await productService.listOutOfStockCount();
  res.json({ data: outOfStock });
}

async function listPriceSummary(req, res, next) {
  const priceSummary = await productService.listPriceSummary();
  res.json({ data: priceSummary });
}

async function listTotalWeightByProduct(req, res, next) {
  const weightByProduct = await productService.listTotalWeightByProduct();
  res.json({ data: weightByProduct });
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
