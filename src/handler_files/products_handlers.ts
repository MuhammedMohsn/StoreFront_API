import { Request, Response} from 'express'
import {ProductsTable,product} from '../models/products_model'
const products_model = new ProductsTable()

export async function show_products (_req:Request, res:Response) {
   try{
    const products=await products_model.index()
    return res.status(200).json(products)
   }
   catch(err){
    console.log(`we can't show_products because ${err}`)
   }
   }
export async function show_product(id:string, res:Response){
    let product_id:number = parseInt(id)
    try{
        const product=await products_model.show(product_id)
        if(!product){return res.json("this product_id not found in database,enter another product_id")}
        return res.status(200).json(product)
    }
    catch (err) {
        console.log(`we can't show product because ${err}`)
    }
 }
 export async function delete_product(id:string, res:Response){
    let product_id:number = parseInt(id)
    try{
        const product=await products_model.delete(product_id)
        if(product){return res.json("this product_id not deleted from database")}
        return res.status(200).json("well deleted")
    }
    catch (err) {
        console.log(`we can't delete product because ${err}`)
    }
 }
 export async function create_product (product:product, res:Response) {
   try{
    const created_product=await products_model.create(product)
    return res.status(200).json(created_product)
   }
   catch (err) {
    console.log(`we can't create product because ${err}`)
   }
 }