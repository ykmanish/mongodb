//include Mongoclient from mongodb
const {MongoClient} = require('mongodb');

//set the database URL
const url = 'mongodb+srv://<username>:<password>@cluster0.fotxcbf.mongodb.net/?retryWrites=true&w=majority';

//set the database you want to use 
const databse = 'ecom';

//connect to mongoclient
const client = new MongoClient(url);

//create function to connect ot the database and collection
async function getData(){

   //connect to the client
   let result = await client.connect();

   //add the databse 
   let db  = result.db(databse);

   //add the collection
   let collection = db.collection('products');

   //take the response
   let response = await collection.find({}).toArray();

   console.log(response)

}

//call the function
getData();



