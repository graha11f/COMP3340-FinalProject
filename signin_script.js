const signin_btn = document.getElementById("btn_signin");
const signup_btn = document.getElementById("btn_signup");
const signup_form = document.getElementById("form-signup");
const signin_form = document.getElementById("form-signin");
const container = document.querySelector(".container");

signin_btn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signup_btn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signup_form.addEventListener("submit", (e) => e.preventDefault());
signin_form.addEventListener("submit", (e) => e.preventDefault());