export const navbar=()=>{
  let name = localStorage.getItem("name");
  let Login = localStorage.getItem("Login");

    return`
 <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3">
      <div class="container-fluid ">
  <a class="navbar-brand text-white fs-5" href="#">Recipe</a>
        <button
          class="navbar-toggler bg-white text-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
        <a class="nav-link text-white fs-5" href="/API_project/index.html">Home</a>
            </li>
            <li class="nav-item">
        <a class="nav-link text-white fs-5" href="/API_project/pages/favorite.html">Favorite</a>
            </li>
            <li class="nav-item">
             <a class="nav-link text-white fs-5" href="/API_project/pages/signup.html" >${Login ? name : 'Signup'}</a>
            </li>
            <li class="nav-item">
             <a class="nav-link text-white fs-5" href="/API_project/pages/login.html" id="logout">${Login ? 'Logout' : 'Login'}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    `
}

export const handleLogout = () => {
  const logout = document.getElementById("logout");

  if (logout && localStorage.getItem("Login")) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("name");
        localStorage.removeItem("Login");
        window.location.href = "/API_project/pages/login.html";
      }
    });
  }
};
