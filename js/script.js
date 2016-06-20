var link = document.querySelector(".search-link");
var form = document.querySelector(".search-form");
var checkin = form.querySelector("[name=check-in]");
var checkout = form.querySelector("[name=check-out]");

link.addEventListener ("click", function(event) {
	event.preventDefault();
	form.classList.toggle("search-form-show");
	checkin.focus();
	form.classList.remove("search-form-error"); 
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (form.classList.contains("search-form-show")) {
			form.classList.remove("search-form-show");
			form.classList.remove("search-form-error");
		}
	}
});

form.addEventListener("submit", function(event) {
	if (!checkin.value || !checkout.value) {
		event.preventDefault();
		form.classList.add("search-form-error");
	}
});