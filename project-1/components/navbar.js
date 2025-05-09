const Navbar = () => {
  let username = localStorage.getItem("username");
  let Login = localStorage.getItem("Login");

  return `
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="/project-1/index.html">PoSTER GAL</a>
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
    <div class="head-menu">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav gap-2 mx-auto me-5 text-uppercase">
        <li class="nav-item">
          <a class="nav-link active nav-link-new" aria-current="page" href="/project-1/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/project-1/pages/signup.html">${Login ? username : "Signup"}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/project-1/pages/product.html">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/project-1/pages/addproduct.html">Add Product</a>
        </li>
      </ul>
      <form class="d-flex ms-5 me-5" role="search">
        <div class="search-container">
          <i class="fas fa-search search-icon" id="search-icon"></i>
          <input
            id="search-input"
            class="form-control me-3"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>
      <ul class="navbar-nav text-uppercase gap-2 me-5">
        <li class="nav-item">
          <a class="nav-link active nav-link-new" href="/project-1/pages/login.html" id="logout">
            <i class="fa-solid ${Login ? "fa-right-from-bracket" : "fa-user"}"></i> ${Login ? "Logout" : "Login"}
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

export const footer=()=>{
  return `
   <footer class="footer">
        <div class="container-fluid">
          <div class="row-lg text-center">
            <div class="col-12-lg">
              <div class="newsletter">
                <span class="ft-txt">
                  Subscribe and stay on top of our latest news and promotions
                </span>
                <label for="email" class="ft-label">Email *</label>
                <input type="email" id="email" name="email" required />
                <div class="subscribe-container">
                  <div class="ft-top">
                    <input type="checkbox" class="check" />
                    <span class="sub-span"
                      >Yes, subscribe me to your newsletter.</span
                    >
                  </div>
                  <button class="subscribe-btn">Subscribe</button>
                </div>
                <div class="social-Icons">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="footer-text">
                  <p>
                    © 2035 by Poster Gal. Powered and secured by
                    <a href="#">DHRUV</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  `;
}