import {Pool} from 'pg'
import config from './config'
let myClient1:Pool=new Pool({
  host: config.postgres_host,
  database: config.postgres_DB,
  user: config.postgres_user,
  password: config.postgres_password,
}) 
if(config.ENV=== 'test') {
  myClient1 = new Pool({
    host: config.postgres_host,
    database: config.postgres_test_DB,
    user: config.postgres_user,
    password: config.postgres_password,
  })
}
export default myClient1;






