const exprees=require('express')
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT || 5000
const app=exprees()
app.use(cors())
app.use(exprees.json())

//bistro_boss
//Iwfq7LACuq6a0d7c




/*============ mongo db===========
============================================ */


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bistro_boss:Iwfq7LACuq6a0d7c@cluster1.phei2xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

/* bistro_boss collection */
const recipeCollection=client.db('bistro_boss').collection('recipe')




/* get the data from  wrincle collection */
app.get('/reciepe',async (req,res)=>{

const consequence=await recipeCollection.find().toArray()
    res.send(consequence)



})



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();
  }
}
run().catch(console.dir);




/*============ mongo db===========
============================================ */

app.get("/",async (req,res)=>{

    res.send("how are yhou")

})

app.listen(port,()=>{
    console.log("example litenting port ")
})