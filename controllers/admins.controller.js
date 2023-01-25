const Product = require("../models/Product.model");

module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const data = await Product.create({
        name: req.body.name,
        price: req.body.price,
        saleRecipe: req.body.saleRecipe,
        category: req.body.category,
      });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
    // - добавление лекарства
  },
  deleteProductByid: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json("Лекарство удалено");
      // - удаление лекарства
    } catch (error) {
      res.json(error);
    }
  },

  editProductById: async (req, res) => {
    try {
      const data = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        saleRecipe: req.body.saleRecipe,
        category: req.body.category,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - изменениe лекарства
  },
  getProducts: async (req, res) => {
    try {
      const data = await Product.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // вывести все товары
  },
};
