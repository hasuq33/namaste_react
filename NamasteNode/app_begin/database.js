const {MongoClient , ServerApiVersion} = require("mongodb"); 

const URI = "mongodb+srv://Harshiv:Harshi10@namstenode.71ppd.mongodb.net/";

const client = new MongoClient(URI,{
    serverApi:{
        version:ServerApiVersion.v1, 
        strict:true, 
        deprecationErrors: true,
    }
})

const dbName = "Test";

async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
     const db =  client.db(dbName);
     const collection =  db.collection("User"); 
     const data = [{
      name:"Foram Chavada",
     },{
      name:"Foram Tie Tie"
     }]

     const filter = {
      name:"Har Har Mahadev",
     }

     const updateDocument = {
      $set:{
        name:"I love you Shiva !",
      }
     }
     const updatedResult = await collection.updateOne(filter,updateDocument);
    //  const result = await collection.insertMany(data)
    //  console.log("Inserted Documents ",result);
     const findResult = await collection.find({}).toArray(); 
     console.log(findResult);
      
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

// Notes

// GO to the mongodb website
// Create a free M0 Cluster
// Create a User
// Get the connection string
// Install Mongo DB Compass