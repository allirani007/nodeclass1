//const express = require('express')   type:"commonjs"
import express from "express"; //"type":"module"  in package.json file
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express();
const PORT = 4000;
const movies = [
  {
    id: "100",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "101",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "102",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "103",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "104",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "105",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "106",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
];
app.use(express.json());

// mongocloud-Reg
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.musbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//const MONGO_URL = "mongodb://localhost";
const MONGO_URL =process.env.MONGO_URL
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
const client=await createConnection();
//const client = await createConnection();

// app.get("/movies/:id", async function (request, response)
// {
//     // db.movies.finOne({id=102});
//     const { id } = request.params;

//        const result = await client.db("mydb").collection("movies").find({id:102});
//         response.send(result);
//      });

app.post("/movie", async function (request, response) {
  // db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await client.db("mydb").collection("movies").insertMany(data);
  response.send(result);
});
//cursor->pageination->convert to array to use (toArray)
app.get("/movie", async function (request, response) {
  // db.movies.finOne();
  //const { id } = request.params;

  const result = await client.db("mydb").collection("movies").find().toArray();
  response.send(result);
});

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

app.get("/", function (req, res) {
  res.send("hello world 🎉✨🧨🎇");
});
app.get("/movie1", function (req, res) {
  res.send(movies);
});

// app.get('/movie/:id', function (req, res) {
//     console.log(req.params);
//     const {id}=req.params;
//     const movie1=(movie.map((val)=>val.id===id))
//     console.log(val);
//     res.send(movie1)
//   })

app.get("/movie/:id", async function (req, res) {
  console.log(req.params);
  // filter | find
  const { id } = req.params;
  const movie1 = movies.find((mv) => mv.id === id);
  const result = await client
    .db("mydb")
    .collection("movies")
    .findOne({ id: id });
  console.log(result);
  result
    ? res.send(result)
    : res.status(404).send({ Message: "No Such data Found 😋" });
});

app.delete("/movie/:id", async function (req, res) {
  console.log(req.params);
  // filter | find
  const { id } = req.params;
  // const movie1 = movies.find((mv) => mv.id === id);
  const result = await client
    .db("mydb")
    .collection("movies")
    .deleteOne({ id: id });
  res.send(result);
});

app.delete("/movie/", async function (req, res) {
  //console.log(req.params);
  // filter | find
  //const { id } = req.params;
  // const movie1 = movies.find((mv) => mv.id === id);
  const result = await client
    .db("mydb")
    .collection("movies")
    .deleteMany({});
  res.send(result);
});


app.put("/movie/:id", async function (req, res) {
  console.log(req.params);
  //db.movie.updateOne({id:id}{$set:updatedata})
  const { id } = req.params;
  const updatedata = req.body;
  // const movie1 = movies.find((mv) => mv.id === id);
  const result = await client
    .db("mydb")
    .collection("movies")
    .updateOne({ id: id }, { $set: updatedata });
  res.send(result);
});

app.listen(PORT, () => console.log(`server started ${PORT}`));
