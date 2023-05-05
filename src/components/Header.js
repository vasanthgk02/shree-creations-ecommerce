import metadata from "../data/metadata.json";
import saree1 from "./1.png";

function Header() {
    return (

        <header class="section-header" style={{
            background: `url(${saree1}) no-repeat center/cover`,
            backdropFilter: 'blur(5px)',
            // height: '50vh', // adjust as needed
        }}>
            <section class="py-5 header-main">
                <div class=" container">
                    <div class="row gy-3 align-items-center">
                        <div class="col-lg-2 col-sm-4 col-4">
                            <h1 class="text-white">{metadata["title"]}</h1>
                        </div>
                        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                            <div class="float-end">
                                <div style={{
                                    color: "white",
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                }}>
                                    <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block">Welcome back, Balaji  </span>
                                </div>
                                <form action="#" class="">
                                    <div class="input-group">
                                        <input type="search" class="form-control" style={{ width: "55%" }} placeholder="Search" />
                                        <select class="form-select">
                                            <option value="">All type</option>
                                            <option value="codex">Special</option>
                                            <option value="comments">Only best</option>
                                            <option value="content">Latest</option>
                                        </select>
                                        <button class="btn btn-primary">
                                            <i class="fa fa-search bg"></i>
                                        </button>
                                    </div>
                                </form>
                                <a data-bs-toggle="offcanvas" href="#offcanvas_cart" class="btn btn-light">
                                    <i class="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 col-12">
                            {/* <form action="#" class="">
                                <div class="input-group">
                                    <input type="search" class="form-control" style={{ width: "55%" }} placeholder="Search" />
                                    <select class="form-select">
                                        <option value="">All type</option>
                                        <option value="codex">Special</option>
                                        <option value="comments">Only best</option>
                                        <option value="content">Latest</option>
                                    </select>
                                    <button class="btn btn-primary">
                                        <i class="fa fa-search bg"></i>
                                    </button>
                                </div>
                            </form> */}
                        </div>

                    </div>
                </div>
            </section>

            <nav class="navbar navbar-light bg-gray-light navbar-expand-lg">
                <div class="container">
                    <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbar_main">
                        <ul class="navbar-nav">
                            {/* <li class="nav-item">
                    <a class="nav-link ps-0" href="#"> Categories </a>
                    </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#">Hot offers 🔥</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Premium Sarees 💝</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Trending Traditional Sarees 💹</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Latest Arrival 🚀</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Top Picks 📦</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Others
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="#">Submenu one </a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu two</a> </li>
                        <li> <a class="dropdown-item" href="#">Submenu three</a> </li>
                    </ul>
                    </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    );
}

export default Header;