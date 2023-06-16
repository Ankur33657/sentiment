import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import Footer from "./Footer";
import shoe1 from "../image/shoe1.jpg";
import shoe2 from "../image/shoe2.jpg";
import shoe3 from "../image/shoe3.jpg";

const ProductList = () => {
  // const buy=()=>{
  //   <Buy/>
  // }

  const [products, setProducts] = useState([]);
  const Style = { padding: "10px" };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("https://sentiment-backend.vercel.app/products");
    result = await result.json();
    console.log(result);
    setProducts(result);
  };

  // console.log(products[0])

  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={shoe1} class="d-block w-100 carousel-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="slide1 ">BEST OF ANKAPRIN EXCLUSIVE BRANDS</h3>
              <p class="slide1 ">
                JUST LAUNCHED SUMMER DEAL GRAB AT DISCOUNT 25%
              </p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="1000">
            <img src={shoe2} class="d-block w-100 carousel-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="slide1">BEST OF ANKAPRIN EXCLUSIVE BRANDS</h5>
              <p class="slide1">FLAT 40% OFF</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={shoe3} class="d-block w-100 carousel-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="slide1">BEST OF ANKAPRIN EXCLUSIVE BRANDS</h5>
              <p class="slide1">NIKE SHOE AT FLAT 50% OFF</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon " aria-hidden="true"></span>
          <span class="visually-hidden ">Next</span>
        </button>
      </div>

      <div class="Flex-container">
        <div class="Flex-item" id="item-1">
          <div class="flex-item-left" style={{ textAlign: "center" }}>
            <div class="sidehover" href="#">
              <h5 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                CATEGORIES
              </h5>
            </div>
            <div class="sidebarelement">
              <div class="sidehover" href="#">
                <a>Jackets</a>
              </div>
              <div class="sidehover" href="#">
                <a>Track pants</a>
              </div>
              <div class="sidehover" href="#">
                <a>Duffel Bag</a>
              </div>
              <div class="sidehover" href="#">
                <a>Casual Shoes</a>
              </div>
              <div class="sidehover" href="#">
                <a>Sunglasses</a>
              </div>
              <div class="sidehover" href="#">
                <a>Back Pouch</a>
              </div>
            </div>
          </div>
          <div class="flex-item-left sidebarelement" id="flex-left2">
            <div class="sidehover" href="#">
              <h4
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                PRICE
              </h4>
            </div>
            <div class="sidehover" href="#">
              Rs.139-Rs.1479
            </div>
            <div class="sidehover" href="#">
              Rs.1479-Rs.2819
            </div>
            <div class="sidehover" href="#">
              Rs.2819-Rs.3379
            </div>
            <div class="sidehover" href="#">
              Rs.3379-Rs.5109
            </div>
            <div class="sidehover" href="#">
              Rs.5109-Above
            </div>
          </div>

          <div class="flex-item-left sidebarelement" id="flex-left3">
            <div class="sidehover" href="#">
              <h4
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  margin: "10px",
                  padding: "5px",
                }}
              >
                BRAND
              </h4>
            </div>
            <div class="sidehover" href="#">
              Roaster
            </div>
            <div class="sidehover" href="#">
              Nike
            </div>
            <div class="sidehover" href="#">
              Bata
            </div>
            <div class="sidehover" href="#">
              Monte Carlo
            </div>
            <div class="sidehover" href="#">
              Jack and Jones
            </div>
            <div
              style={{ marginTop: "32px", padding: "5px", marginRight: "25px" }}
              class="sidehover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              More
            </div>
          </div>
        </div>

        <div class="Flex-item ">
          <div
            class="row row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-xs-1 g-4  "
            style={Style}
          >
            {products.map((item, index) => (
              <div class="col ">
                <div class="card cardlist1 s1">
                  <img
                    style={{ height: "210px", width: "100%" }}
                    src={item.imagelink}
                    class="card-img-top "
                    alt="..."
                  />

                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    {/* <h6><b>{item.category}</b></h6> */}
                    <h6>
                      <b>{item.company}</b>
                    </h6>

                    <h4 class="mb-1 me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                      </svg>
                      {item.price}
                    </h4>
                    {/* <p class="card-text">{item.discription}</p> */}
                    <button class="btn btn-primary btn-sm butt1" type="button">
                      <Link
                        style={{ color: "Black", textDecoration: "none" }}
                        to="/detail"
                        state={{
                          id: item._id,
                          name: item.name,
                          price: item.price,
                          category: item.category,
                          company: item.company,
                          imagelink: item.imagelink,
                          discription: item.discription,
                          comment: item.comment,
                        }}
                      >
                        Details
                      </Link>
                    </button>
                    <button
                      style={{ marginLeft: "140px", marginBottom: "12px" }}
                      class="btn btn-outline-primary btn-sm mt-2 butt1"
                      type="button"
                    >
                      <Link to="/buynow">
                        <svg
                          style={{ margin: "3px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cart3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Buy Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ProductList;
