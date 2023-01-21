import supertest from 'supertest';
import app from '../server';
import { UsersTable } from '../models/users_model';
import myClient1 from '../database'
let user_model = new UsersTable()
const request = supertest(app);
let token_test='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX3VzZXIiOnsiaWQiOjcsImZpcnN0bmFtZSI6ImpqampqamoiLCJsYXN0bmFtZSI6Im1tbW1tbSIsInBhc3N3b3JkIjoiJDJiJDEwJFlkQWZGaFNmeGViWXUxN2tWSzdVLnUwYVFhQll4aDdNUkNObGtLcFJkdE1zSUNpMWJuT2JDIn0sImlhdCI6MTY3MDQ5MDc4NH0.dg_9MG_pjqsv4qQPpCy_kdPXQ8vukUCyqFBOIcxLeuI'
describe('Test endpoint responses', () => {
    let user_test={
        email: 'aa@gmail.com',
        id: 43,
        firstname: 'Muhammed',
        lastname: 'Mohsen',
        password: 'asdfghjhbnhcb'
    }
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });
    beforeAll(async ()=>{
        try{
            let created_user = await user_model.create(user_test)
        }
        catch(err) {
            console.log(`we cannot add user because ${err}`)
        }
    })
    it("gets the authenticate",async()=>{
      try{
        const response=await request.post("/users/authentication").set("content-type", "application/json").send({email:'aa@gmail.com',password:'asdfghjhbnhcb'})
        expect(response.status).toEqual(200)
      }
      catch (err) {
        console.log(`we cannot authenticate user because ${err}`)
      }
    })
    it('gets the /users endpoint', async () => {
       try{
        const response = await request.get('/users').set('Authorization',`Bearer ${token_test}`);
        expect(response.status).toBe(200);
       }
       catch (err) {
        console.log(`we can't get the /users endpoint because ${err}`)
       }
    })
    it('gets the /users/:id endpoint', async () => {
        try{
        const response = await request.get('/users/1').set('Authorization',`Bearer ${token_test}`);
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull
        }
        catch (err) {
            console.log(`we cannot gets the /users/:id endpoint because ${err}`)
        }
    })
    it('gets the post /users endpoint', async () => {
       try{
        const response =await request.post('/users').set('Authorization',`Bearer ${token_test}`).set("content-type", "application/json").send(
            {
                "email": "aaa@gmail.com",
                "id": 31,
                "firstname": "Muhammed",
                "lastname": "Mohsen",
                "password": "asdfghjhbnhcb"
            });
        expect(response.status).toBe(200);
        expect(response.body.created_user.email).toBe("aaa@gmail.com")
       }
       catch (err) {
        console.log(`we can't gets the post /users endpoint because ${err}`)
       }
    })

//    tests for products endpoint
    it('gets the /products endpoint', async () => {
       try{
        const response = await request.get('/products');
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull
       }
       catch (err) {
        console.log(`we can't gets the /products endpoint because ${err}`)
       }
    })
   
    it('gets the /products/:id endpoint', async () => {
       try{
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
       }
       catch (err) {
        console.log(`we can't gets the /products/:id endpoint because ${err}`)
       }
    })
    it('delete the /products/:id endpoint', async () => {
        try{
         const response = await request.delete('/products/1').set('Authorization',`Bearer ${token_test}`);
         expect(response.status).toBe(200);
        }
        catch (err) {
         console.log(`we can't delete the /products/:id endpoint because ${err}`)
        }
     })
    it('post the /products endpoint', async () => {
      try{
        const response = await request.post('/products').set('Authorization',`Bearer ${token_test}`).set("content-type", "application/json").send({
            "id":2,"name":"green_soup","price":20});
        expect(response.status).toBe(200);
        expect(response.body).toEqual({"id":2,"name":"green_soup","price":20})
      }
      catch (err) {
        console.log(`we cannot post the /products endpoint because ${err}`)
      }
    })
    it('gets the /users/:id/orders endpoint', async () => {
       try{
        const response = await request.get('/users/1/orders').set('Authorization',`Bearer ${token_test}`);
        expect(response.status).toBe(200);
       }
       catch (err) {
        console.log(`we can't gets the /users/:id/orders endpoint because ${err}`)
       }
    })

    afterAll(async () => {
       try{
        const connection = await myClient1.connect();
        const sql1="DELETE FROM orders_products"
        const sql2="DELETE FROM orders";
        const sql3="DELETE FROM products"
        const sql4 = "DELETE FROM users";
        await connection.query(sql1);
        await connection.query(sql2);
        await connection.query(sql3);
        await connection.query(sql4);
        connection.release();
       }
       catch(err){console.log(err)}
      });
});
