import { handleLogout, navbar } from "../components/helper.js";

document.getElementById("header").innerHTML = navbar();
handleLogout();

let users= JSON.parse(localStorage.getItem("users")) ||[]
const checklogin=()=>{
    let name = localStorage.getItem("name");
    if (name) {
        document.getElementById("second-div").style.display = "block";
        document.getElementById("first-div").style.display = "none";

        const User = users.find((user) => user.name === name);
        document.getElementById("info").innerHTML = `
        <div class="col-lg-12" >
                <div class="profile-container">
                      <img src="/API_project/img/profile-icon.jpg" alt="Profile Picture" class="profile-image" />
                    <h2 class="user-name">Name: ${User.name}</h2>
                    <p class="user-email">Email: ${User.email}</p>
                </div>
                </div>
            `;
    }
    else {
        document.getElementById("second-div").style.display = "none";
        document.getElementById("first-div").style.display = "block";
    }
}
checklogin();
const handleForm = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("username").value,
    id: document.getElementById("userId").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
 users.push(user);
 localStorage.setItem("users", JSON.stringify(users)); 
 alert("Sign up successfully!");
 window.location.href = "/API_project/pages/login.html";  
};

document.getElementById("signupForm").addEventListener("submit", handleForm);

