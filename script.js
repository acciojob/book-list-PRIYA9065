//your JS code here. If required.
const btn = document.querySelector("button");
const form = document.querySelector(".form-group");
const tbody = document.getElementById("book-list");
btn.addEventListener("click", () =>{
	alert(document.getElementById("title").value);
	alert(document.getElementById("author").value);
	alert(document.getElementById("isbn").value);
})

function book_details(book){
	const tr = document.createElement("tr");
	for(let key in book){
		const cell = document.createElement("td");
		cell.innerText = book[key];
		tr.appendChild(cell);
	}
	const actions = document.createElement("td");
    const deleteButton = document.createElement("button");
	deleteButton.addEventListener("click", deleteButtonFunction);
}

function deleteButtonFunction(e){
	let delete_tr = e.target.parentNode.parentNode;
	delete_tr.remove();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let book = {
		title  : e.target.title.value,
		author : e.target.author.value,
		isbn : e.target.isbn.value,
	}
	book_details(book);
})