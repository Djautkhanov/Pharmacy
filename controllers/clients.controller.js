const Client = require("../models/Client.model");
const Product = require("../models/Product.model");

module.exports.clientController = {
  getProducts: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      res.json(error);
    }
    //- вывод всех лекарств
  },
  getProductByCategory: async (req, res) => {
    try {
      const product = await Product.findById({ categoty: req.params.id });
      res.json(product);
    } catch (error) {
      res.json(error);
    }
    //- вывод лекарств по категории
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.json(error);
    }
    //- вывод опредиленного лекарства
  },

  addProductInBascet: async (req, res) => {
    try {
    const clientInfo = await Client.findById(req.params.id);
    const recipeProduct = await Product.findById(req.body.basket);

    if ((clientInfo.recipe === false) && (recipeProduct.saleRecipe === true)) {
      return res.json("нужен рецепт");
    }
    let all_drug_price = clientInfo.total + recipeProduct.price;

      await clientInfo.updateOne({
        $push: {
          basket: req.body.basket,
        },
        $set: {
          total: all_drug_price,
        },
      });
      return res.json("Препарат добавлен в корзину");
    } catch (error) {
      res.json(error);
    }
    //- добавить определенное лекарство в карзину
  },
  deleteProductInBascet: async (req, res) => {
    try {
      const priceProd = await Product.findById(req.body.basket);
      const client = await Client.findById(req.params.id);

      let money = client.total - priceProd.price;

      await Client.findByIdAndUpdate(req.params.id, {
        $pull: { basket: req.body.basket },
        $set: { total: money },
      });
      res.json("Препарат удален");
    } catch (error) {
      res.json(error);
    }
    //- удаление лекарства из корзины
  },
  clearProductInBascet: async (req, res) => {
    try {
      const product = await Client.findByIdAndUpdate(req.params.id, {
        basket: [],
        total: 0,
      });
      res.json(product);
    } catch (error) {
      res.json(error);
    }
    //- очистить корзину
  },
  buyProducts: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id)

      let money = client.wallet - client.total

       if(client.wallet >= client.total){
        await Client.findByIdAndUpdated({
          basket: [],
          total: 0,
          $set:{wallet: money}
        })
      return  res.json("Все куплено ");
       } else{
        return res.json("Недостаточно средств. Пополните кошелек")}
    } catch (error) {
      res.json(error);
    }
  },
  addClient: async (req, res) => {
   try {
    const client = await Client.create({
      name: req.body.name,
      wallet: req.body.wallet
    })
    res.json(client);
   } catch (error) {
    res.json(error);
   }
  },
  addMoneyToWallet: async (req, res) => {
    try {
      const money = await Client.findByIdAndUpdate(req.params.id,{
      wallet: req.body.wallet
      })
      res.json(money)
    } catch (error) {
      res.json(error)
    }
  }
};
