import { prisma } from "../../../utils/prisma.js";

class UserRepository {
	constructor() { }
	async getUsers() {
		const user= await prisma.user.findMany();   
		console.log("getUsers", user);
		return user;
	}
	createUser() {
		return prisma.user.create({

		});   
	}
}

export {
	UserRepository
};
