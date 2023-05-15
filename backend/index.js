const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const Product = require("./db/Product");
const Comment = require("./db/comment");
const comment = require("./db/comment");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "NO user found}" });
    }
  } else {
    res.send("IN sufficient data");
  }
});

app.post("/addproduct", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "NO product found" });
  }
});

app.post("/postcomment", async (req, res) => {
  Product.findById(req.body.productIDc, (err, item) => {
    if (!err) {
      if (item) {
        item.comments.push({
          userName: req.body.commenterc,
          comment: req.body.commentc,
        });
        let result = item.save();
        res.send(result);
      }
    } else {
      console.log(err);
    }
  });
});

app.post("/getcomm", async (req, res) => {
  Product.findById(req.body.productIDc, (err, item) => {
    if (!err) {
      if (item) {
        res.send(item.comments);
      } else {
        res.send(["No comments found!"]);
      }
    } else {
      console.log(err);
    }
  });

  // let comment = await Comment.find();
  // if (comment.length > 0) {
  //   res.send(comment);
  // } else {
  //   res.send({ result: "NO comment found" });
  // }
});

app.listen(5500);