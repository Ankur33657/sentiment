import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "../App.js";
import shoe1 from "../image/shoe1.jpg";
import shoe2 from "../image/shoe2.jpg";
import shoe3 from "../image/shoe3.jpg";

const Popu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5500/products");
    result = await result.json();
    console.log(result);
    setProducts(result);
  };

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
      {products
        .filter((item) => item.popular === true)
        .map((item, index) => (
          <div class="popuproduct">
            <img
              class="popuitem-1"
              src="https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              alt="#"
            />
            <div class="popuitem-2">{item.discription}</div>
            <div class="popuitem-3">{item.price}</div>
          </div>
        ))}
      <Footer />
    </>
  );
};

export default Popu;
