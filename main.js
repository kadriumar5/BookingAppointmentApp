function saveToLocalStorage(event) {
  event.preventDefault();

  const name = event.target.username.value;
  const email = event.target.emailId.value;

  const obj = {
    name,
    email,
  };

  localStorage.setItem(obj.email, JSON.stringify(obj));
}
function showUserOnScreen(obj) {
  const parentElem = document.getElementById("users");
  const childElem = document.createElement("li");
  childElem.textContent = obj.name + " - " + obj.email;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(obj.email);
    parentElem.removeChild(childElem);
  };

  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.onclick = () => {
    localStorage.removeItem(obj.email);
    parentElem.removeChild(childElem);
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
  };

  childElem.appendChild(deleteButton);
  childElem.appendChild(editButton);
  parentElem.appendChild(childElem);
}
