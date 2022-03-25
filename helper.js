import { client } from "./index1.js";
export async function CreateMovie(data) {
  return await client.db("mydb").collection("movies").insertMany(data);
}

export async function DeleteAll() {
  return await client.db("mydb").collection("movies").deleteMany({});
}

export async function Updatemoviebyid() {
  return await client
    .db("mydb")
    .collection("movies")
    .updateOne({ id: id }, { $set: updatedata });
}

export async function Createuser(data) {
  return await client.db("mydb").collection("User").insertOne(data);
}
export async function getuserByName(data) {
  return await client.db("mydb").collection("User").findOne({ username: data });
}
