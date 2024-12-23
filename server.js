const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const mongodb = require("mongodb");

mongodb.connect(
	String(process.env.MONGO_URL),
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, client) => {
		if (err) console.log("Error on connection MongoDB: ", err.message);
		else {
			console.log("--------------------------------------------");
			console.log("MongoDB connected successfully!");
			module.exports = client;
			const app = require("./app");
			const server = http.createServer(app);

			const PORT = process.env.PORT ?? 5005;
			server.listen(process.env.PORT || PORT, (err, res) => {
				console.log(`Server is running on port: http://localhost:${PORT}`);
			});
		}
	}
);
