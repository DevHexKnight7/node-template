import { Router } from "express";
import { UserRepository } from "../domain/user/index.js";
console.log("route.js");

const route = Router();

// userRepository
const userRepository = new UserRepository();

route.get("/", async(req, res) => {
	res.json(await userRepository.getUsers());
});

export default route;





