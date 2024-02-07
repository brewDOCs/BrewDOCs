import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const expiration = "2h";

// middleware for token verification
export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).send("A token is required for authentication");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
// middleware for token generation
export const generateToken = (username, _id) => {
  const payload = { username, _id };
  return jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn: expiration });
};
