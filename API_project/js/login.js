import { handleLogout, navbar } from "../components/helper.js";

document.getElementById("header").innerHTML=navbar()
handleLogout();

let users= JSON.parse(localStorage.getItem("users")) ||[]

const signinform=(e)=>{
e.preventDefault();

let user={
     email:document.getElementById("email").value,
     password:document.getElementById("password").value,
}

let isMatches = users.filter(
    (ele) => ele.email === user.email && ele.password === user.password
);

if (isMatches.length > 0) {
    alert("Login successful");
    localStorage.setItem("name", isMatches[0].name); 
    localStorage.setItem("Login", true); 
    window.location.href = "/API_project/index.html";
} else {
    alert("Invalid email or password");
}

}

document.getElementById("loginForm").addEventListener("submit",signinform)