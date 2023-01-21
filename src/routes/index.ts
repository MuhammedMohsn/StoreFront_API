import express from 'express'
import users_router from './api_routes/users_endpoints';
import products_router from './api_routes/products_endpoints';
import orders_router from './api_routes/orders_endpoints'
const router = express.Router();
router.use("/users",users_router)
router.use("/users",orders_router)
router.use("/products",products_router)
export default router;
