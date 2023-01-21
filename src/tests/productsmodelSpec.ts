import { ProductsTable } from '../models/products_model'
import myClient1 from '../database'
const products_model = new ProductsTable()
describe('test products_model_methods exist or not', () => {
  it('test if index method exists or not', () => {
    expect(products_model.index).toBeDefined()
  })
  it('test if show method exists or not', () => {
    expect(products_model.show).toBeDefined()
  })
  it('test if create method exists or not', () => {
    expect(products_model.create).toBeDefined()
  })
  it('test if delete method exists or not', () => {
    expect(products_model.delete).toBeDefined()
  })
})
describe('test the output of products_model_methods', () => {
  const product_test= {id: 11,name:'p',price:10}
  beforeAll(async() => {
    try{
      const created_product = await products_model.create(product_test)
    }
    catch(err){
      console.log(`we cannot create product because ${err}`)
    }
  })
  it('test the output of index method ', async () => {
   try{
    let products = await products_model.index()
    expect(products?.length).toBeDefined()
   }
   catch (err) {
    console.log(`we cannot show all products because ${err}`)
   }
  })
  it('test the output of show method ', async () => {
   try{
    const product = await products_model.show(product_test.id)
    expect(product).not.toEqual({
      id: 11,name:'p',price:12
    })
   }
   catch (err) {
    console.log(`we cannot show this product because ${err}`)
   }
  })
  it('test the output of delete method ', async () => {
    try{
     const product = await products_model.delete(product_test.id)
     expect(product).not.toBeDefined()
    }
    catch (err) {
     console.log(`we cannot delete this product because ${err}`)
    }
   })
  it('test the output of create method', async() => {
  try{
    let created_product=await products_model.create({
      id:21,name:"j",price:66
   })
   expect(created_product).not.toEqual({id:20,name:"j",price:66 })
   expect(created_product).toEqual({id:21,name:"j",price:66 })
  }
  catch (err) {
    console.log(`we cannot create this product because ${err}`)
  }
  })

afterAll(async()=>{
   try{
    const connection=await myClient1.connect()
    const sql1="DELETE FROM orders_products"
    const sql2="DELETE FROM orders";
    const sql3="DELETE FROM products";
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
