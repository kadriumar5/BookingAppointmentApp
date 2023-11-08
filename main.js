var form = document.getElementById("my-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
});
