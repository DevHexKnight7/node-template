// const express = require('express'); //es5
import express from "express"; // es6
import dotenv from "dotenv";
import route from "./routes/route.js";
import { PORT } from "./config/config.js";

//dotenv configuration
dotenv.config();

// app 
const app = express();

//port
const port = PORT;

// listen route
app.use("/",route);

// listen on port
app.listen(port, () => {
	console.log("listening on port: " + port);
});