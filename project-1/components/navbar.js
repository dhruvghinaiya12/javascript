const Navbar=()=>{

  let username=localStorage.getItem('username');
  let Login=localStorage.getItem('Login');
    return`

     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/project-1/index.html">Navbar</a>
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
          <div class="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarSupportedContent">
            <ul class="navbar-nav gap-4 me-5 text-uppercase">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/project-1/index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/project-1/pages/signup.html"
                  >${Login ? username :"signup"}</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/project-1/pages/login.html"  id="logout"
                  >${Login ? "Logout" : "Login"}</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/project-1/pages/product.html"
                  >product</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="/project-1/pages/addproduct.html"
                  >add product</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/project-1/pages/cart.html"
                  >cart</a
                >
              </li>
            </ul>
            <form class="d-flex ms-5" role="search">
              <input
                class="form-control me-3 justify-content-end"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> 
       `
}


export default Navbar;