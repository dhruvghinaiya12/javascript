
export const navbar = () => {
  let username = localStorage.getItem("username");
  let Login = localStorage.getItem("Login");

  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Final-Exam2/index.html">logo</a>
        <button
          class="navbar-toggler"
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
              <a class="nav-link" href="/Final-Exam2/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Final-Exam2/pages/add.html">Add Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Final-Exam2/pages/login.html" id="logout"> 
                <i class="fa-solid ${Login ? 'fa-right-from-bracket' : 'fa-user'}"></i> 
                ${Login ? 'Logout' : 'Login'}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Final-Exam2/pages/signup.html" id="navbar-username">
                ${Login ? username : 'Signup'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};

export const handleLogout = () => {
  const logout = document.getElementById("logout");

  if (logout && localStorage.getItem("Login")) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("username");
        localStorage.removeItem("Login");
        window.location.href = "/Final-Exam2/pages/login.html";
      }
    });
  }
};


