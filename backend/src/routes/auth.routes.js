import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/auth.controller.js";

import User from "../models/mysql/users.js";

const router = Router();

router.get("/test", async (req, res) => {
  let user_handle = "@paola1";
  const user = await User.get(user_handle);

  console.log(user.user_password);

  //console.log(user[0].user_password);
  res.send(user);
});

router.post("/login", loginUserController);

router.post("/signup", createUserController);

export default router;
