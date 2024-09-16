import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
let student = JSON.parse(localStorage.getItem("student")) || [];

const handleData = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("UserName").value,
    grid: document.getElementById("grid").value,
    course: document.getElementById("course").value,
    fees: document.getElementById("fees").value,
    number: document.getElementById("number").value,
  };
   if(user.grid.length > 4){
    alert("Grid can't be greater than 4 digits");
    return;
   }
  if (user.number.length > 10) {
    alert("number can't be greater than 10 digits");
    return;
  }

  student.push(user);
  localStorage.setItem("student", JSON.stringify(student));
  window.location.href = "/Exam-8/student.html";
};

document.getElementById("UserData").addEventListener("submit", handleData);
