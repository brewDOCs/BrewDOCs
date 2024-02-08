import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const expiration = "2h";

// middleware for token verification
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Extract token from the cookie
  if (!token)
    return res.status(403).send("A token is required for authentication");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decoded;
    return next(); // Call next middleware in the chain
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};

// middleware for token generation
export const generateToken = (username, _id) => {
  const payload = { username, _id };
  const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: expiration,
  });
  console.log(token);
  return token;
};
