import { DashboardQueries } from '../Services/dashboard'
import {OrdersTable} from '../models/orders_model'
import { UsersTable } from '../models/users_model'
import myClient1 from '../database'
const dashboard_model_methods = new DashboardQueries()
const orders_model=new OrdersTable()
const users_model=new UsersTable()
describe('test dashboard_model_methods exist or not', () => {
  it('test if create method exists or not', () => {
    expect(dashboard_model_methods.show_active).toBeDefined()
  })
})
describe('test the output of orders_model_methods', () => {
  const order_test = {
    order_id: 20,
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
     let created_order = await orders_model.create(order_test)
     }

    catch (err) {
    console.log(`we cannot create user or order because ${err}`)
    }
   })
 
  it('test the output of show_active method ', async () => {
    try{
      const active_orders=await dashboard_model_methods.show_active(order_test.user_id)
      expect(active_orders).toBeDefined()
    }
    catch (err) {
      console.log(`we can't show active order because ${err}`)
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
