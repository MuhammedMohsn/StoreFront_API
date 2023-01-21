import express from "express";
import { order } from "../../models/orders_model";
import { validateAuthenticate } from "../../middlewares/validateAuthenticate";
import {
  create_order,
} from "../../handler_files/orders_handlers";
import {show_active_order} from '../../handler_files/dashboard_handler'
const orders_router = express.Router();
orders_router.post("/orders",validateAuthenticate, (req, res) => {
  const { order_id, user_id, status } = req.body;
  let order: order = { order_id, user_id, status };
  create_order(order, res);
});
orders_router.get("/:id/orders",validateAuthenticate, (req, res) => {
  let id: number = parseInt(req.params.id as string);
  return show_active_order(id, res);
});
export default orders_router;
