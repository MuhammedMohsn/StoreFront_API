# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

-scripts used in this project :
  "start": "node dist/server.js"
  "watch": "tsc-watch"
  "up":"db-migrate up -c 4"
  "down":"db-migrate down -c 4"
  "test": "set ENV=test & db-migrate up -c 4 --env test & tsc & jasmine & db-migrate down -c 4 --env test "

## Steps to Start
1- after downloading the project , you can find all my secret data in .env file like as below
   port=3000
   postgres_port=5432
   postgres_host=localhost
   postgres_DB=Udacity_DB
   postgres_user=postgres
   postgres_password=yugi oh power1
   postgres_test_DB=Udacity_test_DB
   ENV=dev
   bcrypt_password=abcd
   salt_rounds=10
   token_secret=asdfg

2. Prepare databases :
start using PgAdmin and create two databases using commands in SQL shell or by GUI, the first one for development and the other one will be for testing later.
 -if you use SQL shell , you should enter your localhost equal to local host,postgres database equal to postgres,postgres_port equal to 5432,username is postgres,password is your password when installing PgAdmin 
 -after that create databases using these commands :  CREATE DATABASE Udacity_DB; CREATE DATABASE Udacity_test_DB;
 -then  in SQL shell run command  to connect to Udacity_DB database : \c Udacity_DB   .
 -finally you can run migrations in these databases.


3. running migrations:
   -all migrations found in migrations folders
   - to run migrations use commands :
       - "npm run up" in terminal  : to apply up migrations.
       - "npm run down " in terminal : to apply down migrations.
   - you can start running the server now.
4. running the app :
   - write in terminal "npm run start" to start the server 
   - open postman app and put in the Authorization header of type Bearer this valid token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX3VzZXIiOnsiaWQiOjcsImZpcnN0bmFtZSI6ImpqampqamoiLCJsYXN0bmFtZSI6Im1tbW1tbSIsInBhc3N3b3JkIjoiJDJiJDEwJFlkQWZGaFNmeGViWXUxN2tWSzdVLnUwYVFhQll4aDdNUkNObGtLcFJkdE1zSUNpMWJuT2JDIn0sImlhdCI6MTY3MDQ5MDc4NH0.dg_9MG_pjqsv4qQPpCy_kdPXQ8vukUCyqFBOIcxLeuI
   - simulate accessing endpoints and showing outputs of each endpoint  from these ( get /users, get /users/:id, post /users,get /users/:id/orders).

5. close the server.
6. testing the models and endpoints:
     -running down migrations using "npm run down " in terminal,then running up migrations using "npm run up "
     -running test script using "npm run test"
     
-the requirments for this project :
 1- install PgAdmin and create 2 databases called (Udacity_DB,Udacity_test_DB) with the required columns for each table.
 2- all info of environment variables connection found in env file.
 3- before running the project , make sure you are connected to the databases in PgAdmin.
 4- install packages using NPM like :express,dotenv,bcrypt,body-parser,cors,db-migrate,db-migrate-pg,express,jsonwebtoken,pg,jasmine,jasmine-spec-reporter,jasmine-ts,supertest,ts-node,tsc-watch
 and types of these packages.

-notes : -to run up/down scripts use cmd terminal , or install db-migrate globally in system.
         -to authenticate the initial password that found from up migration, use the password equal to ""




Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
