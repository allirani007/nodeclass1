//const express = require('express')   type:"commonjs"
import express from "express"; //"type":"module"  in package.json file
import { MongoClient } from "mongodb";
const app = express()
//const PORT=4000;
const PORT=process.env.PORT
const movie=[
    {
      id: 1,
      name: "Vetaikkaran",
      language: "Tamil",
      "Song writer": "Vennelakanthi"
    },
    {
      id: 2,
      name: "Velaiyilla Pattathari",
      language: "Tamil",
      "Song writer": "Dhanush"
    },
    {
      id: 3,
      name: "Master",
      language: "Tamil",
      "Song writer": "Vimal Kashyap"
    },
    {
      id: 4,
      name: "Tenet",
      language: "English"
    },
    {
      id: 5,
      name: "Interstellar",
      language: "English"
    },
    {
      id: 6,
      name: "Bahubali",
      language: "Telugu",
      "Song writer": "Shiva Shakti Datta"
    }
  ];

//   app.use(express.json());

// const MONGO_URL = "mongodb://localhost";

// async function createConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log("Mongo is connected ✌️😊");
//   return client;
// }
// const client = await createConnection();


  // const MONGO_URL="mongodb://localhost";
  // async function createconnection(){
  //   const client = new MongoClient(MONGO_URL);
  //   await client.connect();
  //   console.log("mongo is connected 🧏🏻‍♀️🧏🏻‍♀️")
  // }
  // createconnection();
  // async function createConnection() {
  //   const client = new MongoClient(MONGO_URL);
  //   await client.connect();
  //   console.log("Mongo is connected ✌️😊");
  // }
  // createConnection();
  

app.get('/', function (req, res) {
  res.send("hello world 🎉✨🧨🎇")
})
app.get('/movie', function (req, res) {
    res.send(movie)
  })

// app.get('/movie/:id', function (req, res) {
//     console.log(req.params);
//     const {id}=req.params;
//     const movie1=(movie.map((val)=>val.id===id))
//     console.log(val);
//     res.send(movie1)
//   })



  app.get('/movie/:id', function (req, res) {
    console.log(req.params);
    // filter | find
    const { id } = req.params;
    const movie1 = movie.find((mv) => mv.id === +(id));
    res.send(movie1);
  });
  
app.listen(PORT,()=>console.log(`server started ${PORT}`));