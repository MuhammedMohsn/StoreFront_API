import express from "express";
import {validateAuthenticate} from "../../middlewares/validateAuthenticate"
import { product } from "../../models/products_model";
import {
  show_product,
  delete_product,
  show_products,
  create_product,
} from "../../handler_files/products_handlers";
const products_router = express.Router();
products_router.get("/",validateAuthenticate, (req, res) => {
  show_products(req, res);
});
products_router.get("/:id",validateAuthenticate, (req, res) => {
  const { id } = req.params;
  show_product(id, res);
});
products_router.delete("/:id",validateAuthenticate,(req, res) => {
  const { id } = req.params;
  delete_product(id, res);
});
products_router.post("/",validateAuthenticate,(req, res) => {
  let product: product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  };
  create_product(product, res);
});
export default products_router;
