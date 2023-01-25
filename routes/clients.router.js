const { Router } = require("express");
const { clientController } = require("../controllers/clients.controller");
const router = Router();

//- вывод всех лекарств
router.get("/client/product", clientController.getProducts);

//- вывод лекарств по категории
router.get("/client/category/product/:id", clientController.getProductByCategory);

//- вывод опредиленного лекарства
router.get("/client/product/:id", clientController.getProduct);

//- добавить определенное лекарство в карзину
router.patch("/client/product/:id", clientController.addProductInBascet);

//- удаление лекарства из корзины
router.patch("/client/basket/product/:id",clientController.deleteProductInBascet);

//- очистить корзину
router.patch("/client/basket/clean/:id", clientController.clearProductInBascet);

// - купить лекарства из корзины
router.patch("/client/buy/product/:id", clientController.buyProducts);

// - пополнить кошелек
router.patch("/client/wallet", clientController.addMoneyToWallet);

router.post("/client", clientController.addClient);


module.exports = router;
