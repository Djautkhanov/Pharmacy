const Category = require("../models/Category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      const data = await Category.create({
        name: req.body.name,
      });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
    // - добавление категории
  },
  deleteCategoryByid: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("Категория удалена");
      // - удаление категории
    } catch (error) {
      res.json(error);
    }
  },

  editCategoryById: async (req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - изменениe категории
  },
  getCategorys: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // вывести все категории
  },
};
