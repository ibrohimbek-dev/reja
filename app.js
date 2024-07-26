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
	db.collection("plan")
		.find()
		.toArray((err, data) => {
			if (err) {
				alert(err.message);
				res.end("(app.get/) something went wrong");
			} else {
				res.render("plan", { items: data });
			}
		});
});

// post an item
app.post("/create-item", (req, res) => {
	// STEP 2
	const new_plan = req.body.plan;
	// STEP 3
	db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
		res.json(data.ops[0]);
	});
});

// delete an item
app.post("/delete-item", (req, res) => {	
	const id = req.body.id;	

	db.collection("plan").deleteOne(
		{ _id: new mongodb.ObjectId(id) },
		(err, data) => {
			if (err) {
				console.log("Error on deleting plan =>", err.message);
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
	const data = req.body;	

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
	if (req.body.delete_all) {
		db.collection("plan").deleteMany(() => {
			res.json({ state: "All plans are deleted successfully" });
		});
	}
});

module.exports = app;

// 28 - dars shu yerda yakunlandi
// 수고 하셨습니다!
