import express from "express";
import { CreateMovie, DeleteAll, Updatemoviebyid } from "../helper.js";
const router = express.Router();

router.delete("/movie/", async function (req, res) {
  //console.log(req.params);
  // filter | find
  //const { id } = req.params;
  // const movie1 = movies.find((mv) => mv.id === id);
  const result = await DeleteAll();
  res.send(result);
});

router.put("/movie/:id", async function (req, res) {
  console.log(req.params);
  //db.movie.updateOne({id:id}{$set:updatedata})
  const { id } = req.params;
  const updatedata = req.body;
  // const movie1 = movies.find((mv) => mv.id === id);
  const result = await Updatemoviebyid();
  res.send(result);
});

router.post("/movie", async function (request, response) {
  // db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await CreateMovie(data);
  response.send(result);
});

export const movieRouter = router;
