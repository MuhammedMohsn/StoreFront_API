import  { Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import {order, OrdersTable} from '../models/orders_model'
const orders_model_table=new OrdersTable()
export async function create_order (order:order, res: Response) {
    try {
      const created_order = await orders_model_table.create(order)
      const token=jwt.sign({created_order},config.token_secret as string)
      res.status(200).json({created_order,token})
    } catch (err) {
      console.log(`we can't  add this order to the user because :${err}`)
    }
  }
