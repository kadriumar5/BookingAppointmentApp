var form = document.getElementById("my-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
});
