const router = require("express").Router({ mergeParams: true });
const controller = require("./suppliers.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:supplierId")
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;
