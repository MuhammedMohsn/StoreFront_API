import { UsersTable } from "../models/users_model";
import myClient1 from "../database";
const user_model = new UsersTable();

describe("test users_model_methods exist or not", () => {
  it("test if index method exists or not", () => {
    expect(user_model.index).toBeDefined();
  });
  it("test if show method exists or not", () => {
    expect(user_model.show).toBeDefined();
  });
  it("test if create method exists or not", () => {
    expect(user_model.create).toBeDefined();
  });
});
describe("test the output of users_model_methods", () => {
  const user_test = {
    "email": "m1@gmail.com",
    "id": 20,
    "firstname": "Muhammed",
    "lastname": "Mohsen",
    "password": "asdf",
  };
  beforeAll(async () => {
    try{
      const created_user = await user_model.create(user_test);
    }
    catch(err) {
      console.log(`we cannot create user because ${err}`)
    }
  });
  it("test the output of show method ", async () => {
   try{ 
    const user = await user_model.show(user_test.id);
    expect(user).toEqual(user_test);
   }
   catch (err) {
    console.log(`we cannot show user because ${err}`)
   }
  });
  it("test the output of create method", async () => {
   try{
    let created_user = await user_model.create(user_test);
    expect(created_user).toEqual('the user is existed or id is duplicated');
   }
   catch(err){
    console.log(`we cannot create user because ${err}`)
   }
  });
  it("test the output of create method", async () => {
   try{
    let created_user = await user_model.create(
      {
        email: "m2@gmail.com",
        id: 21,
        firstname: "Muhammed",
        lastname: "Mohsen",
        password: "asdf",
      }
    );
    expect(created_user).not.toEqual('the user is existed');
   }
   catch(err){
    console.log(`we cannot create user because ${err}`)
   }
  });
  it("test the output of index method ", async () => {
   try{
    let users = await user_model.index();
    expect(users?.length).not.toBeNull;
   }
   catch (err) {
    console.log(`we cannot show users because ${err}`)
   }
  });
  it("tests the authentication of users endpoints", async() => {
   try{
    let authenticate_user = await user_model.authentication("m1@gmail.com","aasdf");
    expect(authenticate_user?.password).not.toBe(user_test.password);
   }
   catch (err) {
    console.log(`we cannot  authenticate users because ${err}`)
   }
  });

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
   catch (err) {console.log(err)}
  });
});
