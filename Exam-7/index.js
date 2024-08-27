let user = JSON.parse(localStorage.getItem("user")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

const handledata = (user) => {
  document.getElementById("sidebar").innerHTML = "";

  user.map((data) => {
    let img = document.createElement("img");
    img.src = data.img;
    let username = document.createElement("h3");
    username.innerHTML = data.username;
    let div = document.createElement("div");
    div.append(img, username);
    document.getElementById("sidebar").append(div);
  });
};

const handleusers = (users) => {
  document.getElementById("main").innerHTML = "";

  users.map((newsdata) => {
    let image = document.createElement("img");
    image.src = newsdata.image;
    let title = document.createElement("h2");
    title.innerHTML = newsdata.title;
    let p = document.createElement("p");
    p.innerHTML = newsdata.description;
    let div = document.createElement("div");
    div.append(image, title, p); 
    document.getElementById("main").append(div);
  });
};

handledata(user);

handleusers(users);

