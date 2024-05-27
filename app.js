// 2024-05-27:
// Lesson 28h
// Delete Plans

// import main module & packages:
const express = require("express");
const app = express();

// Call MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3 session (views codes):
app.set("views", "views");
app.set("view engine", "ejs");

// 4 session (route codes):

// post item
app.post("/create-item", (req, res) => {
	// STEP 2
	const new_plan = req.body.plan;
	console.log("new_plan: ", new_plan);
	// STEP 3
	db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
		console.log("DATA.OPS APP.JS: ", data.ops);
		res.json(data.ops[0]);
	});
});

// get item
app.get("/", (req, res) => {
	db.collection("plan")
		.find()
		.toArray((err, data) => {
			if (err) {
				console.log("Collection Error: ", err.message);
				res.end("(app.get/) something went wrong");
			} else {
				console.log("Collection Data: ", data);
				res.render("plan", { items: data });
			}
		});
});

// delete item
app.post("/delete-item", (req, res) => {
	const id = req.body.id;
	console.log("deletion id: ", id);

	db.collection("plan").deleteOne(
		{ _id: new mongodb.ObjectId(id) },
		(err, data) => {
			if (err) {
				console.log("Error deleting item: ", err.message);
				res
					.status(500)
					.json({ state: "error", message: "Failed to delete item" });
			} else {
				res.json({ state: "success" });
			}
		}
	);
});

module.exports = app;

// 28 - dars shu yerda yakunlandi
// 수고 하셨습니다!
