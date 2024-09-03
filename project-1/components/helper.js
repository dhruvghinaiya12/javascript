const handleLogout = () => {
  const logout = document.getElementById("logout");

  if (logout && localStorage.getItem("Login")) {
    logout.addEventListener("click", (e) => {  
      e.preventDefault();
      if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("username");
        localStorage.removeItem("Login");
        window.location.href = "/project-1/index.html";
      }
    });
  }
};

export default handleLogout;

export const getValue = (className) => {
  return document.querySelector(className).value;
};

export const createTag = (tag, value) => {
    let tagName = document.createElement(tag);
    if (tag == "img") {
        tagName.src = value;
    }
    else {
        tagName.innerHTML = value;
    }
    return tagName;
};