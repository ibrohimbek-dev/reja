// console.log("Frontend JS is working");

const createForm = document.getElementById("create-form");
const itemText = document.querySelector(".item-text");
const itemList = document.getElementById("item-list");
const deleteAll = document.getElementById("delete-all");

let createField = document.getElementById("create-field");

const itemTemplate = (data) => {
	return `<li style="margin-bottom: 4px;"
						class="list-group-item list-group-item-info align-items-center d-flex justify-content-between">
						<span class="item-text">
							${data.plan}
						</span>
						<div>
							<button data-id="${data._id}" class="edit-me btn btn-secondary"
								style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">Edit</button>
							<button data-id="${data._id}" class="delete-me btn btn-danger"
								style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">
								delete
							</button>
						</div>
					</li>`;
};

// FRONTEND => BACKEND => DATABASE => BACKEND => FRONTEND

// Add an item (post)
createForm.addEventListener("submit", (event) => {
	event.preventDefault();

	axios
		.post("/create-item", { plan: createField.value })
		// STEP 1
		.then((response) => {
			// STEP 4
			// console.log("DATA: ", response);

			// STEP 5
			itemList.insertAdjacentHTML("beforeend", itemTemplate(response.data));
			createField.value = "";
			createField.focus();
		})
		.catch((err) => {
			console.log("Error while posting with axios: ", err.message);
		});
});

// Delete single item (delete)
document.addEventListener("click", (event) => {
	// delete operation
	if (event.target.classList.contains("delete-me")) {
		if (confirm("Are you sure?")) {
			axios
				.post("/delete-item", { id: event.target.getAttribute("data-id") })
				.then((response) => {
					event.target.parentElement.parentElement.remove();
				})
				.catch((err) => {
					console.log("Error while posting with axios: ", err.message);
				});
		}
	}

	// edit operation
	if (event.target.classList.contains("edit-me")) {
		let userInput = prompt(
			"Add something new or modify it!",
			event.target.parentElement.parentElement
				.querySelector(".item-text")
				.innerHTML.trim()
		);

		if (userInput) {
			axios
				.post("/edit-item", {
					id: event.target.getAttribute("data-id"),
					new_input: userInput,
				})
				.then((response) => {
					console.log(response.data);

					event.target.parentElement.parentElement.querySelector(
						".item-text"
					).innerHTML = userInput;
				})
				.catch((err) => {
					console.log("Please, try again later!");
				});
		}
	}
});

// Delete all item (delete)
document.getElementById("delete-all").addEventListener("click", function () {
	axios
		.post("/delete-all", { delete_all: true })
		.then((response) => {
			alert(response.data.state);
			document.querySelectorAll(".list-group-item").forEach((item) => {
				item.remove();
			});
		})
		.catch((err) => {
			console.log("Please, try again later!");
		});
});