const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const schema = require("./Schema");
const cors = require("cors");

mongoose+
  .connect(
    "mongodb+srv://Monank:monank123@cluster0.7aq6y.mongodb.net/products")
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get("/product", async (req, res) => {
      try {
        const ans = await schema.find();
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.get("/product/:id", async (req, res) => {
      try {
        const ans = await schema.findOne({
          item: req.params.item,
        });
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.post("/product/add", async (req, res) => {
      try {
        const temp = new schema(req.body);
        const result = await temp.save();
        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.delete("/product/:id", async (req, res) => {
      try {
        const ans = await schema.deleteOne({
          item: req.params.item,
        });
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(400).send("Invalid data");
      }
    });
    app.patch("/product/:id", async (req, res) => { 
      try {
          const laptop = await schema.findOne({ item: req.params.item });
  
          if (!laptop) {
              return res.status(404).send("Data not found");
          }
  
          if (req.body.name) product.name = req.body.name;
          if (req.body.MenufactureName) product.MenufactureName = req.body.MenufactureName;
          if (req.body.id) product.id = req.body.id;
          if (req.body.avatar) product.avatar = req.body.avatar;
          if(req.body.price) product.price = req.body.price;
  
          await product.save();
          res.send(product);
      } catch (error) {
          res.status(500).send("Server error");
      }
  });
  

    app.listen(4000, () => {
      console.log("Server started at 4000");
    });
  });