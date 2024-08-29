let user = JSON.parse(localStorage.getItem("user")) || [];
document.getElementById("SignUpBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("Password").value,
  };
  user.push(data);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "./login.html";
});
