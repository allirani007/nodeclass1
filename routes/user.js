import express from "express";
import { Createuser } from "../helper.js";
import bcrypt from "bcrypt";
const router = express.Router();

async function getPassword(password) {
  //bcrypt.getSalt(Noofrounds)
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
  //console.log({ salt, hashPassword });
}
//getPassword("password@234");

// router.post("/signup", async function (request, response) {
//   // db.user.insertOne(data)
//   const data = request.body;
//   console.log(data);
//   const result = await Createuser(data);
//   response.send(result);
// });

router.post("/signup", async function (request, response) {
  // db.user.insertOne(data)
  const { username, password } = request.body;
  const hashPassword = await getPassword(password);
  console.log(hashPassword);
  const newuser = {
    username: username,
    password: hashPassword,
  };
  console.log(newuser);
  const result = await Createuser(newuser);
  response.send(result);
});

export const userRouter = router;
