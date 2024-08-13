const handledata = (e) => {
  e.preventDefault();

  let data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      password: document.getElementById("password").value,
  };

  localStorage.setItem("userData", JSON.stringify(data));

  UIData(data);
};

const UIData = (data) => {
  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  li1.innerHTML = `Username: ${data.username}`;

  let li2 = document.createElement("li");
  li2.innerHTML = `Email: ${data.email}`;

  let li3 = document.createElement("li");
  li3.innerHTML = `Number: ${data.number}`;

  let li4 = document.createElement("li");
  li4.innerHTML = `Password: ${data.password}`;

  let li5 = document.createElement("li");
  li5.innerHTML = "";
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";

  removeButton.addEventListener("click", () => {
    ul.remove(); 
    localStorage.removeItem("userData"); 
  });

  li5.append(removeButton);

  ul.append(li1, li2, li3, li4, li5);

  document.getElementById("container").append(ul);
};

const loadData = () => {
  let data = JSON.parse(localStorage.getItem("userData"));

  if (data) {
    UIData(data);
  }
};

const removeAllRecords = () => {
  document.getElementById("container").innerHTML = ""; 
  localStorage.removeItem("userData"); 
};

document.getElementById("userdata").addEventListener("submit", handledata);
document.getElementById("removeAll").addEventListener("click", removeAllRecords);

window.onload = loadData;
