import express,{Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
export const validateAuthenticate=(req:Request, _res:Response,next: express.NextFunction):void=>{
try{
    const auth_header=req.headers.authorization
    const token=auth_header?.split(" ")[1]
    jwt.verify(token as string,config.token_secret as string)
    next()
}
catch(err){
    console.log(`the user can't access this route because it's not authorized because ${err}`)
}
}
