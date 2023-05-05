import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
function Footer({ data }) {

    const [showAlert, setShowAlert] = useState(false);
    function sendEmail() {
        fetch("http://localhost:5000/sendemail")
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    let price = 0;
    return (

        <div className=" bg-danger footer-section">
            <footer class="section-footer bg-white border-top">
                <div class="container">
                    <section class="footer-main padding-y">
                        <div class="row">
                            <aside class="col-12 col-sm-12 col-lg-3">
                                <article class="me-lg-4">
                                    <p class="mt-3"> © 2023- 2024 Saree Emporium. <br /> All rights reserved. </p>
                                </article>
                            </aside>
                            <aside class="col-6 col-sm-4 col-lg-2">
                                <h6 class="title">Store</h6>
                                <ul class="list-menu mb-4">
                                    <li> <a href="#">About us</a></li>
                                    <li> <a href="#">Find store</a></li>
                                </ul>
                            </aside>
                            <aside class="col-6 col-sm-4 col-lg-2">
                                <h6 class="title">Information</h6>
                                <ul class="list-menu mb-4">
                                    <li> <a href="#">Help center</a></li>
                                    <li> <a href="#">Money refund</a></li>
                                    <li> <a href="#">Shipping info</a></li>
                                </ul>
                            </aside>
                            <aside class="col-6 col-sm-4  col-lg-2">
                                <h6 class="title">Support</h6>
                                <ul class="list-menu mb-4">
                                    <li> <a href="#"> Help center </a></li>
                                    <li> <a href="#"> Documents </a></li>
                                    <li> <a href="#"> Account restore </a></li>
                                </ul>
                            </aside>
                            <aside class="col-12 col-sm-12 col-lg-3">
                                <h6 class="title">Newsletter</h6>
                                <p>Subscibe to get notified about the latest and trending saree picks.</p>

                                <form class="mb-3">
                                    <div class="input-group">
                                        <input class="form-control" type="text" placeholder="Email" />
                                        <button class="btn btn-light" type="submit">
                                            Join
                                        </button>
                                    </div>
                                </form>
                            </aside>
                        </div>
                    </section>

                    <section class="footer-bottom d-flex justify-content-lg-between border-top">
                        <div>
                            <i class="fab fa-lg fa-cc-visa"></i>
                            <i class="fab fa-lg fa-cc-amex"></i>
                            <i class="fab fa-lg fa-cc-mastercard"></i>
                            <i class="fab fa-lg fa-cc-paypal"></i>
                        </div>
                        <nav class="dropup">
                            <button class="dropdown-toggle btn d-flex align-items-center py-0" type="button" data-bs-toggle="dropdown">
                                <img src="assets/images/flag-usa.webp" class="me-2" height="20" />
                                <span>English</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Russian</a></li>
                                <li><a class="dropdown-item" href="#">Arabic</a></li>
                                <li><a class="dropdown-item" href="#">Spanish</a></li>
                            </ul>
                        </nav>

                    </section>
                </div>
            </footer>


            <aside class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_cart">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title">Your cart has {data.length} items</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {data.map((obj, index) => {
                        { price = price + obj["price"] }
                        return (
                            <figure class="itemside mb-4" key={index}>
                                <div class="aside">
                                    <img src={obj["imgUrl"]} class="border img-sm rounded" />
                                </div>
                                <figcaption class="info">
                                    {/* <a href="#" class="btn btn-icon btn-light float-end">
                                        <i class="fa fa-trash"></i>
                                    </a> */}
                                    <p> {obj["desc"]}</p>
                                    {/* <span class="text-muted">1 x {obj["price"]} </span> <br /> */}
                                    <strong class="price"> {"₹" + obj["price"]} </strong>
                                </figcaption>
                            </figure>
                        );
                    })}

                    <hr />

                    <p class="mb-3 text-center"> Subtotal:  <strong class="text-danger">₹ {price}</strong>  </p>
                    <div class="mb-3" onClick={() => {
                        sendEmail();
                        setShowAlert(true);
                    }}>
                        <a href="#" class="btn w-100 btn-success"> Checkout </a>
                    </div>
                    <p class="mb-3 text-center"> <img src="assets/images/payments.webp" height="22" />  </p>

                </div>
            </aside>
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
                        <AlertTitle>Check your email</AlertTitle>
                        Do your payment to place the order!
                    </Alert>
                </div>
            )}
        </div>


    );
}

export default Footer;