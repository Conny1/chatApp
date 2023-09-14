import express from "express";
import { createAccount, logIn } from "../controlers/user.js";

const Router = express.Router();

Router.post("/signup", createAccount);

Router.post("/signin", logIn);

export default Router;
