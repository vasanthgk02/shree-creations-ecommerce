import React, { useState, useEffect } from "react";
import data from "../data/data.json"
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Header from "../components/Header";

function Shop() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [cart, setCartData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const handleAddToCart = (obj) => {
    setShowAlert(true);
    setCartData((data) => [...data, obj]);
  }



  const handleMinChange = (event) => {
    setMinValue(event.target.value);
  }

  const handleMaxChange = (event) => {
    setMaxValue(event.target.value);
  }

  const [objects, setObjects] = useState([]);
  useEffect(() => {
    setObjects(data[0]);
    console.log(objects);
  }, []);




  const handleClick = () => {
    console.log(minValue + " " + maxValue);
    const filteredObjects = data[0].filter((obj) => {
      return obj["price"] >= minValue && obj["price"] <= maxValue;
    });

    setObjects(filteredObjects);
  }


  const handleSort = (order) => {
    if (order === 'desc') {
      setObjects([...objects].sort((a, b) => a["price"] - b["price"]));
    } else if (order === 'asc') {
      setObjects([...objects].sort((a, b) => b["price"] - a["price"]));
    }
    for (let i = 0; i < objects.length; i++)
      console.log(objects[i]);
  }

  return (
    <>
      <Header />

      {/* <div class="collapse navbar-collapse" id="navbar_main">
        <ul class="navbar-nav">
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
        </ul>
      </div> */}

      <div className="home-section">

        <section class="padding-y">
          <div class="container">
            <div class="row">
              <aside class="col-lg-3">
                <button
                  class="btn btn-outline-secondary mb-3 w-100  d-lg-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#aside_filter"
                >
                  Show filter
                </button>

                <div id="aside_filter" class="collapse card d-lg-block mb-5">
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        class="title"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_aside1"
                      >
                        <i class="icon-control fa fa-chevron-down"></i> Categories
                      </a>
                    </header>
                    <div class="collapse show" id="collapse_aside1">
                      <div class="card-body">
                        <ul class="list-menu">
                          <li>
                            <a href="#">Printed sarees </a>
                          </li>
                          <li>
                            <a href="#">Silk sarees </a>
                          </li>
                          <li>
                            <a href="#">Cotton sarees </a>
                          </li>
                          <li>
                            <a href="#">Georgette sarees </a>
                          </li>
                          <li>
                            <a href="#">Bridal sarees </a>
                          </li>
                          <li>
                            <a href="#">Party wear sarees </a>
                          </li>
                          <li>
                            <a href="#">Printed silk sarees </a>
                          </li>
                          <li>
                            <a href="#">Traditional sarees with modern twists </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        class="title"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_aside_brands"
                      >
                        <i class="icon-control fa fa-chevron-down"></i>{" "}
                        Region-specific sarees
                      </a>
                    </header>
                    <div class="collapse show" id="collapse_aside_brands">
                      <div class="card-body">
                        <label class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span class="form-check-label"> Banarasi Sarees</span>
                          <b class="badge rounded-pill bg-gray-dark float-end">
                            120
                          </b>
                        </label>

                        <label class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span class="form-check-label">
                            {" "}
                            Kanjivaram Sarees{" "}
                          </span>
                          <b class="badge rounded-pill bg-gray-dark float-end">
                            15
                          </b>
                        </label>

                        <label class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span class="form-check-label"> Patola Sarees </span>
                          <b class="badge rounded-pill bg-gray-dark float-end">
                            35
                          </b>
                        </label>

                        <label class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span class="form-check-label">
                            {" "}
                            Kanchipuram Sarees{" "}
                          </span>
                          <b class="badge rounded-pill bg-gray-dark float-end">
                            89
                          </b>
                        </label>
                        <label class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span class="form-check-label">
                            {" "}
                            Rasipuram Handloom Sarees{" "}
                          </span>
                          <b class="badge rounded-pill bg-gray-dark float-end">
                            89
                          </b>
                        </label>
                      </div>
                    </div>
                  </article>

                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        class="title"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_aside2"
                      >
                        <i class="icon-control fa fa-chevron-down"></i> Price
                      </a>
                    </header>
                    <div class="collapse show" id="collapse_aside2">
                      <div class="card-body">
                        <div class="row mb-3">
                          <div class="col-6">
                            <label for="min" class="form-label">
                              Min
                            </label>
                            <input
                              class="form-control"
                              id="min"
                              placeholder="$0"
                              type="number"
                              value={minValue}
                              onChange={handleMinChange}
                            />
                          </div>

                          <div class="col-6">
                            <label for="max" class="form-label">
                              Max
                            </label>
                            <input
                              class="form-control"
                              id="min"
                              placeholder="$0"
                              type="number"
                              value={maxValue}
                              onChange={handleMaxChange}
                            />
                          </div>
                        </div>
                        <button class="btn btn-light w-100" type="button" onClick={handleClick}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </article>

                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        class="title"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_aside3"
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        Sort by
                      </a>
                    </header>
                    <div class="collapse show" id="collapse_aside3">
                      <div class="card-body">
                        <label class="checkbox-btn">
                          <span class="btn btn-light" onClick={() => handleSort("asc")}> High to Low </span>
                        </label>

                        <label class="checkbox-btn">
                          <span class="btn btn-light" onClick={() => handleSort("desc")}> Low to High </span>
                        </label>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <main class="col-lg-9">
                <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                  <strong class="d-block py-2">All Items </strong>
                  <div class="ms-auto ">
                    <select class="form-select d-inline-block w-auto me-1">
                      <option value="0">Best match</option>
                      <option value="1">Recommended</option>
                      <option value="2">High rated</option>
                      <option value="3">Randomly</option>
                    </select>
                    <div class="btn-group">
                      <a
                        href="#"
                        class="btn btn-light"
                        data-bs-toggle="tooltip"
                        title="List view"
                      >
                        <i class="fa fa-bars"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-light active"
                        data-bs-toggle="tooltip"
                        title="Grid view"
                      >
                        <i class="fa fa-th"></i>
                      </a>
                    </div>
                  </div>
                </header>

                <div class="row">
                  {objects.map((obj, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                        <figure className="card card-product-grid">
                          <div className="img-wrap">
                            <img src={obj.imgUrl} alt={obj.title} />
                          </div>
                          <figcaption className="info-wrap border-top">
                            <div className="price-wrap">
                              <strong className="price">{"₹ " + obj.price}</strong>
                              <del className="price-old">{" ₹ " + obj["price-old"]}</del>
                            </div>
                            <p className="title mb-2">{obj.desc}</p>

                            <div className="btn btn-danger" onClick={() => { handleAddToCart(obj) }}>
                              Add to cart
                            </div>

                            {/* <a href="#" className="btn btn-light btn-icon">
                              <i className="fa fa-heart"></i>
                            </a> */}
                          </figcaption>
                        </figure>
                        {showAlert && (
                          <div
                            style={{
                              position: "fixed",
                              top: 0,
                              left: 0,
                              width: "100%",
                              zIndex: 9999,
                            }}
                          >
                            <Alert
                              severity="success"
                              onClose={() => setShowAlert(false)}
                              sx={{ mb: 2 }}
                            >
                              <AlertTitle>Success</AlertTitle>
                              Product added to cart!
                            </Alert>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <hr />

                <footer class="d-flex mt-4">
                  <nav class="ms-3">
                    <ul class="pagination">
                      <li class="page-item active">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item" aria-current="page">
                        <span class="page-link">2</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </footer>
              </main>
            </div>
          </div>
        </section>
      </div>
      <Footer data={cart} />
    </>
  );
}

export default Shop;
