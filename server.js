const http = require("http");
const mongodb = require("mongodb");

let db;
// const connectionString =
// 	"mongodb+srv://admin:admin@cluster0.vgohadt.mongodb.net/reja?retryWrites=true&w=majority&appName=Cluster0";
const connectionString =
	"mongodb+srv://admin:admin@cluster0.vgohadt.mongodb.net/reja";

mongodb.connect(
	connectionString,
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

			// const PORT = 3000; for simple github repo
			const PORT = 3041; // for server deployment
			server.listen(process.env.PORT || PORT, (err, res) => {
				console.log(`Server is running on port: ${PORT}`);
			});
		}
	}
);
