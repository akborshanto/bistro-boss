const exprees = require("express");
const cors = require("cors");
/* json web token */
const jwt = require("jsonwebtoken");

require("dotenv").config();
const port = process.env.PORT || 5000;
const app = exprees();
app.use(cors());
app.use(exprees.json());

/*  */

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

    /* jSON WEB TOKEN=======================
=========================== */

    /* middle ware token */

    app.post("/jwt", async (req, res) => {
      // console.log(req.headers)
      const user = req.body;
      console.log(req.headers);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    /* middle ware */
    const verifyToken = (req, res, next) => {
//console.log("insite verify token", req.headers);

      if (!req.headers.authorization) {
        return req.status(401).send({ message: "forbidden access" });
      }
      const token = req.headers.authorization.split(" ")[1];
      /* 8 */
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return req.status(401).send({ message: "forbidden acces" });
        }
        req.decoded = decoded;
        next();
      });

      // next()
    };

    /* use varify admin after verrify token */

    const verifyAdmin= ("/users", verifyToken,async(req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };

      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbiddent token" });
      }

next()


    });

    /* get token email value */
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const emal = req.params.email;
      if (emal !== req.decoded.email) {
        return res.status(403).send({ Mesage: "useauthorezed a user access" });
      }
      const query = { emal: emal };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });

    /* jSON WEB TOKEN================
================================== */

    /* middleware */
    // const virefyToken = (req, res, next) => {
    //   console.log("inside verify token", req.headers);

    //   if (!req.headers.authorization) {
    //     return res.status(401).send({ message: "FORBIDDEN ACCESS" });
    //   }

    //   const token = req.headers.authorization.split(" ")[1];
    //   jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    //     if (err) {
    //       return res.status(401).send({ message: "forbidden access" });
    //     }
    //     req.decoded = decoded;
    //     next();
    //   });
    //   // next()
    // };

    /* user realted api */
    // app.post("/users", virefyToken, async (req, res) => {
    //   /* insert email if user doesnt exits */
    //   //i can do this many ways (1,email unique 2.upsert 3,simple cheking)
    //   console.log(req.headers);
    //   const user = req.body;

    //   //console.log(user);
    //   const query = { email: user.email };
    //   // console.log(query);
    //   const existingUser = await userCollection.findOne(query);
    //   if (existingUser) {
    //     return res.send({ message: "user already exis", insertedId: null });
    //   }
    //   // console.log(query);
    //   const result = await userCollection.insertOne(user);
    //   res.send(result);
    // });
    /* get the all user data */
    app.get("/users", verifyToken,async (req, res) => {
      console.log(req.headers);
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    /* update the data from users collsction */
    app.patch("/user/admin/:id", async (req, res) => {
      const id = req.params.id;
      const userData = req.body;
      //console.log(userData)
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          //role/introduction/preface/foreword/induction
          //coritro
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(query, updateDoc);
      //console.log(result)
      res.send(result);
    });

    /* delete user */
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      //console.log(typeof id)
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    /* get the  cart collection data from  wrincle collection */
    app.get("/reciepe", async (req, res) => {
      const consequence = await recipeCollection.find().toArray();
      res.send(consequence);
    });



    /* update single data with specifiq id */
app.get('/reciepe/:id', async (req,res)=>{

const id=req.params.id;

const query={_id: id}
console.log(1,query)
const result= await recipeCollection.findOne(query)
console.log(result)
res.send(result)

})
/* patch the recipe collection data */
app.patch('/recipes/:id', async(req,res)=>{
  const item=req.body;

const id=req.params.id;
console.log(id)
const query={_id: id}
const updateDoc={
$set:{

name:item.name,
category:item.category,
price:item.price,
recipe:item.recipe,
image:item.image

}

}
console.log(item)
const result=await recipeCollection.updateOne(query,updateDoc)
console.log(result.data)
res.send(result)


})





/* post the menu data from add item client */
app.post('/reciepe',verifyToken,async (req,res)=>{
const query=req.body;
console.log(query)
const result=await recipeCollection.insertOne(query)
res.send(result)


})
/* delete reciepte */

app.delete('/reciepe/:id',verifyToken,verifyAdmin,async (req,res)=>{
const id=req.params.id;
console.log(id)
const query={_id: new ObjectId(id)}
console.log(query)
const result= await recipeCollection.deleteOne(query)
res.send(result)



})




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
      //console.log(query);
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
