import express from "express";
import { Createuser, getuserByName } from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  const newuser = {
    username: username,
    password: hashPassword,
  };
  console.log(hashPassword);
  console.log(newuser);
  const result = await Createuser(newuser);
  response.send(result);
});

router.post("/Login", async function (request, response) {
  // db.user.findOne({username:"tamil"})
  //
  const { username, password } = request.body;

  const usernamefromDb = await getuserByName(username);
  console.log(usernamefromDb); //get data from database to check usernamefromDB will return username and password
  if (!usernamefromDb) {
    response.status(401).send({ message: "Invalid credentials ⚡ " });
  } else {
    const storedPassword = usernamefromDb.password;
    const isMatchpassword = await bcrypt.compare(password, storedPassword);
    console.log("ismatchpassword :", isMatchpassword);
    if (isMatchpassword) {
      const token = jwt.sign({ id: usernamefromDb._id }, process.env.mySecret);
      response.send({ Message: "Successful Login🙏🏻😋👍👍👍 ", token: token });
    } else {
      response.status(401).send({ message: "Invalid credentials ⚡ " });
    }
  }
});

export const userRouter = router;
