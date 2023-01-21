import express from "express";
import { user } from "../../models/users_model";
import { validateAuthenticate } from "../../middlewares/validateAuthenticate";
import {
  show_all_users,
  show_user,
  create_user,
  authenticate_user,
} from "../../handler_files/users_handlers";
const users_router = express.Router();
users_router.get("/" ,validateAuthenticate,(req, res) => {
  show_all_users(req, res);
});
users_router.post("/" ,validateAuthenticate, (req, res) => {
  const { email, id, firstname, lastname, password } = req.body;
  let user: user = { email, id, firstname, lastname, password };
  create_user(user, res);
});
users_router.post("/authentication", (req, res) => {
  const { email, password } = req.body;
  return authenticate_user(email, password, res);
});
users_router.get("/:id" , validateAuthenticate,(req, res) => {
  const id = req.params.id;
  return show_user(id, res);
});
export default users_router;
