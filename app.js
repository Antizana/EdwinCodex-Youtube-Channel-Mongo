const express = require("express");
const app = express();

/*  
	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://www.turbo360.co/docs 
const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}
const app = vertex.app(config) // initialize app with config options
*/

// import routes
const index = require("./routes/index");
const api = require("./routes/api");

// set routes
app.use("/", index);
app.use("/api", api); // sample API Routes

const PORT = 3000;
const HOST = "localhost";

const mongoose = require("mongoose");

mongoMain().catch((err) => console.log(err));
async function mongoMain() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
