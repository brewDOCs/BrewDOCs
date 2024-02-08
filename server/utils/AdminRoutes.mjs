import { userControllers } from "./AdminControllers.mjs";
import express from "express";

// router for admin routes using userControllers.mjs
const adminRoutes = express.Router();

// login route
adminRoutes.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userControllers.login(username, password, res);
    res.json({ user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// signup route
adminRoutes.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userControllers.signup(username, email, password, res);
    res.json({ user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default adminRoutes;
