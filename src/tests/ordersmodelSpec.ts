import { OrdersTable } from '../models/orders_model'
import {UsersTable } from '../models/users_model'
import myClient1 from '../database'
const orders_model = new OrdersTable()
const users_model = new UsersTable()
describe('test orders_model_methods exist or not', () => {
  it('test if create method exists or not', () => {
    expect(orders_model.create).toBeDefined()
  })
})
describe('test the output of orders_model_methods', () => {
  const order_test = {
    order_id: 11,
    user_id: 1,
    status: 'active',
  }

 beforeAll(async () => {
  try{
   let created_user = await users_model.create(
    {
      "email": "mmmm@gmail.com",
      "id": 1,
      "firstname": "Muhammed",
      "lastname": "Mohsen",
      "password": "abc"})
   }
  catch (err) {
  console.log(`we cannot create user ${err}`)
  }
 })
  it('test the output of create method ', async () => {
    try{ 
      const order = await orders_model.create({
        order_id: 10,
        user_id: 1,
        status: 'active'
      })
      expect(order).not.toBe({
        order_id: 10,
        user_id: 1,
        status: 'complete'
      })
    }
    catch (err) {
      console.log(`we cannot create order because ${err}`)
    }
  })
  
  afterAll(async()=>{
    try{
      const connection=await myClient1.connect()
      const sql1="DELETE FROM orders_products"
      const sql2="DELETE FROM orders";
      const sql3="DELETE FROM products"
      const sql4 = "DELETE FROM users";
      await connection.query(sql1);
      await connection.query(sql2);
      await connection.query(sql3);
      await connection.query(sql4);
      connection.release()
    }
    catch (err) {console.log(err)}
    })
})
