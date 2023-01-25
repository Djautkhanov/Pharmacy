const { Router } = require("express");
const { productController } = require("../controllers/admins.controller");
const { categoryController } = require("../controllers/categories.controller");
const router = Router();

//-добавить товар
router.post("/admin", productController.addProduct);

//- удолить товар
router.delete("/admin/:id", productController.deleteProductByid);

//- изменить товар
router.patch("/admin/:id", productController.editProductById);

// вывести все товары
router.get("/admin", productController.getProducts);

//- добавить котегории
router.post("/admin/category", categoryController.addCategory);

//- удолить котегорию
router.delete("/admin/category/:id", categoryController.deleteCategoryByid);

//- изменить котегорию
router.patch("/admin/category/:id", categoryController.editCategoryById);

//- вывести все котегории
router.get("/admin/category", categoryController.getCategorys);

module.exports = router;
