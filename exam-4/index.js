let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  content();
};

const content = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].username;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].grid;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].course;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].fees;
    let td5 = document.createElement("td");
    td5.innerHTML = users[i].number;
    let td6 = document.createElement("td");
    td6.innerHTML = "delete";
    td6.addEventListener("click", handleDelete);
    document.getElementById("tbody").append(tr);
    tr.append(td1, td2, td3, td4, td5, td6);
  }
};
const handleData = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("Name").value.trim(),
    grid: document.getElementById("grid").value,
    course: document.getElementById("course").value,
    fees: document.getElementById("fees").value,
    number: document.getElementById("number").value,
  };
  if (user.username.length < 2) {
    alert("Username should be at least 2 characters long");
    return;
  }
  if (user.grid.length != 4) {
    alert("Grid should be 4 digits long");
    return;
  }
  if (
    user.number.length != 10 ||
    !["6", "7", "8", "9"].includes(user.number[0])
  ) {
    alert(
      "Phone number should be at least 10 digits long and start with 6 or 7 8 or 9"
    );
    return;
  }
  users.push(user);
  console.log(users);
  content();
};

document.getElementById("UserData").addEventListener("submit", handleData);
