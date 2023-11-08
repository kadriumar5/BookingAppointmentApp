var form = document.getElementById("my-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
});
