const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(require("./routes/admins.route"));
app.use(require("./routes/clients.router"));

mongoose.connect(
  "mongodb+srv://vakha:vakha123@cluster0.jzwrdu1.mongodb.net/Pharmacy",
  async () => {
    try {
      console.log("Успешно соединились с сервером MongoDB");
      app.listen(3000, () => {
        console.log("Сревер успешно запушен");
      });
    } catch (error) {
      console.log(error);
    }
  }
);
