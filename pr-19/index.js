import ApiMethods from "./components/API.js";

let id = null;

const AddData = async (e) => {
  e.preventDefault();

  let user = {
    img: document.getElementById("img").value,
    name: document.getElementById("name").value,
    id: document.getElementById("id").value,
    number: document.getElementById("number").value,
    course: document.getElementById("course").value,
  };

  if (!user.id) {
    alert("ID cannot be empty");
    return;
  }

  if (id === null) {
    const users = await ApiMethods.get();
    let existingUser = users.find((item) => item.id === user.id);

    if (existingUser) {
      alert("This ID already exists. Please enter a different ID.");
      return;
    }

    await postData(user);
  } else {
    await ApiMethods.patch(id, user);
    id = null;
    document.getElementById("id").removeAttribute("readonly");
  }
  StudentData();
};

document.getElementById("formdata").addEventListener("submit", AddData);

const Updatedata = (item) => {
  document.getElementById("img").value = item.img;
  document.getElementById("name").value = item.name;
  document.getElementById("id").value = item.id;
  document.getElementById("number").value = item.number;
  document.getElementById("course").value = item.course;

  id = item.id;
  document.getElementById("id").setAttribute("readonly", "readonly");
  document.getElementById("change").textContent = "Update";

};

const postData = async (user) => {
  await ApiMethods.post(user);
};

const DeleteData = async (studentId) => {
  await ApiMethods.delete(studentId);
  StudentData();
};

const StudentData = async () => {
  let users = await ApiMethods.get();
  document.getElementById("display").innerHTML = "";

  users.map((item) => {
    let div = document.createElement("div");
    div.className = "main-student";

    let img = document.createElement("img");
    img.src = item.img;

    let id = document.createElement("h1");
    id.innerHTML = ` ID: ${item.id}`;

    let name = document.createElement("h1");
    name.innerHTML = `Name: ${item.name}`;

    let course = document.createElement("h1");
    course.innerHTML = `Course: ${item.course}`;

    let num = document.createElement("h1");
    num.innerHTML = `Number: ${item.number}`;

    let btn1 = document.createElement("button");
    btn1.innerHTML = "Delete";
    btn1.addEventListener("click", () => {
      DeleteData(item.id);
    });

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Update";
    btn2.addEventListener("click", () => {
      Updatedata(item);
    });

    div.append(img, id, name, course, num, btn2, btn1);
    document.getElementById("display").append(div);
  });
};

StudentData();
