let user = JSON.parse(localStorage.getItem("user")) || [];
const handledata = (e) => {
  e.preventDefault();

  let data = {
    username: document.getElementById("username").value,
    img: document.getElementById("img").value,
  };
  user.push(data);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "./index.html"; 
};

document.getElementById("userdata").addEventListener("submit", handledata);
