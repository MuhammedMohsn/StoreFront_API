import  { Request, Response } from 'express'
import { UsersTable, user } from '../models/users_model'
import config from '../config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const users_model = new UsersTable()

export async function show_all_users(_req: Request, res: Response) {
 try{
  const users = await users_model.index()
  res.status(200).json(users)
 }
 catch(err){
  console.log(`we can't show_all_users because ${err}`)
 }
}

export async function show_user(id:string, res: Response) {
  const user_id = parseInt(id)
  try{
    const user = await users_model.show(user_id)
    if(!user){return res.json("this user_id not found in database,enter another user_id")}
    res.status(200).json(user)
  }
  catch (err) {
    console.log(`we can't show this user because ${err}`)
  }
}
export async function create_user(user:user, res: Response) {
  const salt=parseInt(config.salt_rounds  as string,10)
  const pepper=config.bcrypt_password
  let hashed_password = bcrypt.hashSync(`${user.password}${pepper}`,salt)
  let user_entered_after_hashing_password: user = {
    email:user.email,
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    password: hashed_password,
  }
  try{
    const created_user = await users_model.create( user_entered_after_hashing_password)
  if(typeof created_user=="string"){return res.json(created_user)}
  const token = jwt.sign({created_user},config.token_secret as unknown as string)
  return res.status(200).json({created_user,token})
  }
  catch(err){
    console.log(`we can't create this user because ${err}`)
  }
}
export async function authenticate_user(email:string,password:string, res: Response){
 try{
  let user=await users_model.authentication(email,password)
  if(user){ 
    const token = jwt.sign({user},config.token_secret as unknown as string)
    const message="user signed in successfully"
    return res.status(200).send({user,token,message})
  }
  return res.send("this user is not authenticated")
 }
 catch (err) {
  console.log(`we can't authenticate this user because ${err}`)
 }
}