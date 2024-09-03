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

