import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML= navbar()
let student=[];
const handleData = (e) => {
    e.preventDefault();
  
    let user = {
      username: document.getElementById("UserName").value,
      grid: document.getElementById("grid").value,
      course: document.getElementById("course").value,
      fees: document.getElementById("fees").value,
      number: document.getElementById("number").value,
      
    };
  
    student.push(user);
    localStorage.setItem("student",JSON.stringify(student));

  };

document.getElementById("UserData").addEventListener("submit", handleData);