const Navbar = () => {
  let username = localStorage.getItem("username");
  let Login = localStorage.getItem("Login");

  return `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/project-1/index.html">PoSTER GAL</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center gap-5"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav gap-4 ms-5 text-uppercase">
            <li class="nav-item">
              <a class="nav-link active nav-link-new" aria-current="page" href="/project-1/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/project-1/pages/signup.html">
                ${Login ? username : "signup"}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/project-1/pages/product.html">product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/project-1/pages/addproduct.html">add product</a>
            </li>
          </ul>
          <form class="d-flex ms-5" role="search">
            <input
              class="form-control me-3 justify-content-end"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div
            class="collapse navbar-collapse d-flex justify-content-center gap-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav text-uppercase">
              <li class="nav-item">
                <a class="nav-link active nav-link-new" href="/project-1/pages/login.html" id="logout">
                  <i class="fa-solid ${Login ? 'fa-right-from-bracket' : 'fa-user'}"></i>
                  ${Login ? "Logout" : "Login"}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active nav-link-new" href="/project-1/pages/cart.html">
                  <i class="fas fa-shopping-cart"></i> Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `;
};

export default Navbar;
