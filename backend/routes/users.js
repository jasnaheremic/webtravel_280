import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/adduser", getUsers)

export default router