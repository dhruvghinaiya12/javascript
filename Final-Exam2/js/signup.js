import ApiMethods from "../components/api.js";
import { navbar, handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML = navbar();
handleLogout();

let data = JSON.parse(localStorage.getItem("signupdata")) || [];
const checkLoginStatus = () => {
  let username = localStorage.getItem("username");
  if (username) {
    document.getElementById("UserData").style.display = "none";
    document.getElementById("second-div").style.display = "block";

    const User = data.find((user) => user.username === username);
    document.getElementById("second-div").innerHTML = `
                <div class="profile-container">
                      <img src="/Final-Exam2/img/profile-picture1.jpg" alt="Profile Picture" class="profile-image" />
                    <h2 class="user-name">Name: ${User.username}</h2>
                    <p class="user-email">Email: ${User.email}</p>
                </div>
            `;
  } else {
    document.getElementById("UserData").style.display = "block";
    document.getElementById("second-div").style.display = "none";
  }
};

checkLoginStatus();

const userdata = (e) => {
  e.preventDefault();
  let user = {
    img: document.getElementById("img").value,
    username: document.getElementById("username").value.trim(),
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  if(user.img.length <= 0){
    alert("Please upload a profile picture");
    return;
  }
  const usernamePattern = /^[A-Z][a-zA-Z0-9]{1,}$/;
  if (!usernamePattern.test(user.username)) {
    alert(
      "Username should start with a capital letter, contain only letters and digits, and be at least 2 characters long. Spaces are not allowed."
    );
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user.email)) {
    alert("Please enter a valid email address");
    return;
  }
  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(user.password)) {
    alert(
      "Password should be at least 8 characters long and include at least one letter, one number, and one special character."
    );
    return;
  }


  data.push(user);
  localStorage.setItem("signupdata", JSON.stringify(data));
  alert("signup successful"); 
  window.location.href = "/Final-Exam2/pages/login.html";
  // postsignupdata(user);
};

document.getElementById("UserData").addEventListener("submit", userdata);

const postsignupdata = async (user) => {
  await ApiMethods.postsignup(user);
};
