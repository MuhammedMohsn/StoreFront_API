import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import router from './routes/index'
import cors from 'cors'
import config from './config'
const port=config.port
const app: express.Application = express()
const address: string = "0.0.0.0:3000"
app.use(bodyParser.json())
app.use("/",router)
app.use(cors({origin:"*"}))
app.get('/', function (_req: Request, res: Response) {
    res.send('Hello World!')
})
app.listen(port, function () {
    console.log(`starting app on: ${address}`)
})
export default app