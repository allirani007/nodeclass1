// custom middlewareexport
import jwt from "jsonwebtoken";
export const auth = (request, response, next) => {
  try {
    const token = request.header("x-auth-token");
    console.log(token);
    jwt.verify(token, process.env.mySecret);
    next();
  } catch (err) {
    response.status(401).send({ error: err.message });
  }
};

// import jwt from "jsonwebtoken";
// // custom middlewareexport
// const auth = (request, response, next) =>
// {try {const token = request.header("x-auth-token");
// console.log(token);jwt.verify(token, process.env.SECRET_KEY);
// next();
// }
//  catch (err) {response.status(401).send({ error: err.message });}};
