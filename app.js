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

// get all items
app.get("/", (req, res) => {
	console.log("user entered /");
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

// post an item
app.post("/create-item", (req, res) => {
	console.log("user entered /create-item");
	// STEP 2
	const new_plan = req.body.plan;
	console.log("new_plan: ", new_plan);
	// STEP 3
	db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
		console.log("DATA.OPS APP.JS: ", data.ops);
		res.json(data.ops[0]);
	});
});

// delete an item
app.post("/delete-item", (req, res) => {
	console.log("user entered /delete-item");
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

// edit an item
app.post("/edit-item", (req, res) => {
	console.log("user entered /edit-item");
	const data = req.body;
	console.log(data);

	db.collection("plan").findOneAndUpdate(
		{
			_id: new mongodb.ObjectId(data.id),
		},
		{ $set: { plan: data.new_input } },
		(err, data) => {
			res.json({ state: "success" });
		}
	);
});

// delete all item at once
app.post("/delete-all", (req, res) => {
	console.log("user entered /delete-all");
	if (req.body.delete_all) {
		db.collection("plan").deleteMany(() => {
			res.json({ state: "All plans are deleted successfully" });
		});
	}
});

module.exports = app;

// 28 - dars shu yerda yakunlandi
// 수고 하셨습니다!
