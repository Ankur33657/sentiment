import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css"
import Footer from "./Footer";


const ProductList = () => {
  // const buy=()=>{
  //   <Buy/>
  // }

  const [products, setProducts] = useState([]);
  const Style = { marginLeft: '5%', padding: 15};
  const S1 = { width: "90%",margin: '2px',borderStyle: 'outset',
  borderWidth: '4px', borderColor:'#ced4da',background: "#e9ecef",borderRadius:'5px' };
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch('http://localhost:5500/products');
    result = await result.json();
    console.log(result);
    setProducts(result);
  }

  // console.log(products[0])

  return (
    <>
    
      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
   
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <div class="Flex-container">
      <div class="Flex-item" id="item-1">  
      <div class="flex-item-left">
        
      <div href="#">Home</div>
      <div href="#">About</div>
      <div href="#">Contact</div>
      <div href="#">Services</div>
      <div href="#">Blog</div>
      </div>
      <div class="flex-item-left" id="flex-left2">
      <div href="#">Home</div>
      <div href="#">About</div>
      <div href="#">Contact</div>
      <div href="#">Services</div>
      <div href="#">Blog</div>
      </div>

      <div class="flex-item-left" id="flex-left2">
      <div href="#">Home</div>
      <div href="#">About</div>
      <div href="#">Contact</div>
      <div href="#">Services</div>
      <div href="#">Blog</div>
      </div>
      </div>
   
    
    
       <div class="Flex-item" id="item-2">
      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-xs-1 g-4" style={Style} >

        {
          products.map((item, index) => (
            <div class="col">
              <div class="card" style={S1}>

                <img style={{ height: '210px', width: '100%' }} src={item.imagelink} class="card-img-top" alt="..." />

                <div class="card-body">

                  <h5 class="card-title">{item.name}</h5>
                  <h6><b>{item.category}</b></h6>
                  <h6><b>{item.company}</b></h6>
                  <h4 class="mb-1 me-1">${item.price}</h4>
                  <p class="card-text">{item.discription}</p>
                  <button class="btn btn-primary btn-sm" type="button"><Link style={{ color: "Black", textDecoration: "none" }} to="/detail" state={{
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    company: item.company,
                    imagelink: item.imagelink,
                    discription: item.discription,
                    comment: item.comment,
                  }} >Details</Link></button>
                  <button style={{ marginLeft: '120px' }} class="btn btn-outline-primary btn-sm mt-2" type="button"  ><Link to="/buynow">
                    Buy Now</Link>
                  </button>

                </div>
              </div>

            </div >


          ))
        }
      </div>
      </div>
      </div>
      
<Footer/>

    </>
  )

}
export default ProductList;