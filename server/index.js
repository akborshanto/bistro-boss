const exprees = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = exprees();
app.use(cors());
app.use(exprees.json());

//bistro_boss
//Iwfq7LACuq6a0d7c

/*============ mongo db===========
============================================ */

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://bistro_boss:Iwfq7LACuq6a0d7c@cluster1.phei2xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    /* bistro_boss collection */
    const recipeCollection = client.db("bistro_boss").collection("recipe");
    const cartCollection = client.db("bistro_boss").collection("ourShopCart");
    const userCollection = client.db("bistro_boss").collection("users");

    /* user realted api */
    app.post("/users", async (req, res) => {
      /* insert email if user doesnt exits */
      //i can do this many ways (1,email unique 2.upsert 3,simple cheking)

      const user = req.body;

      console.log(user);
      const query = { email: user.email };
      console.log(query);
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exis", insertedId: null });
      }
      console.log(query);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    /* get the  cart collection data from  wrincle collection */
    app.get("/reciepe", async (req, res) => {
      const consequence = await recipeCollection.find().toArray();
      res.send(consequence);
    });

    /* GET THE DATA FROM In As Much as cartCollection */
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      //console.log(query)
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    /* our shop cart post method */
    app.post("/ourShopCart", async (req, res) => {
      const query = req.body;
      console.log(query);
      const result = await cartCollection.insertOne(query);
      res.send(result);
    });

    /*  delte the data  specifiq,appointed,earMarked outof our*/
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const consequence = await cartCollection.deleteOne(query);
      res.send(consequence);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //  await client.close();
  }
}
run().catch(console.dir);

/*============ mongo db===========
============================================ */

app.get("/", async (req, res) => {
  res.send("how are yhou");
});

app.listen(port, () => {
  console.log("example litenting port ");
});
