import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import Sentiment from 'sentiment'

const ProductDetails = (props) => {
  const sentiment = new Sentiment();
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [neutral,setNeutral]=useState(0);
  const [happy,setHappy]=useState(0);
  const [sad,setSad]=useState(0);
 
 const nut=()=>{
  setNeutral(neutral+1);
 }
 const hap=()=>{
  setHappy(happy+1);
 }
 const sa=()=>{
  setSad(sad+1);
 }
  const dat = {
    productIDc: location.state.id,
    commenterc: JSON.parse(localStorage.getItem("user")).name,
    commentc: comment,
  };

  const collectdata = async () => {
    let result = await fetch("http://localhost:5500/postcomment", {
      method: "Post",
      body: JSON.stringify(dat),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    setComment("");
    getcomments(); // ye work nahi kr rha h. ha dekhe
  };

  //handleCommentChange
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  //Render comment
  const [con, setCon] = useState([]);
  useEffect(() => {
    getcomments();
  }, []);

  const getcomments = async () => {
    const preCommInfo = { productIDc: location.state.id };
    let re = await fetch("http://localhost:5500/getcomm", {
      method: "Post",
      body: JSON.stringify(preCommInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    re = await re.json();
    setCon(re);
  };

  // console.log(con);
  // console.log(location.state.comments);

  return (
    <>
      <div className="detailsbg">
        <div class="container mt-5 mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div style={{ borderRadius: "0%" }} class="card">
                <div class="row">
                  <div class="col-md-6">
                    <div class="images p-3">
                      <div class="text-center p-4">
                        {" "}
                        <img
                          alt=""
                          id="main-image"
                          src={location.state.imagelink}
                          width="250"
                        />{" "}
                      </div>
                      <div class="thumbnail text-center">
                        {" "}
                        <img
                          onclick="change_image(this)"
                          alt=""
                          src={location.state.imagelink}
                          width="70"
                        />{" "}
                        <img
                          alt=""
                          onclick="change_image(this)"
                          src={location.state.imagelink}
                          width="70"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="product p-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          {" "}
                          <i class="fa fa-long-arrow-left"></i>{" "}
                          
                        </div>{" "}
                        <i class="fa fa-shopping-cart text-muted"></i>
                      </div>
                      <div class="mt-4 mb-3">
                        {" "}
                        <span class="text-uppercase text-muted brand">
                          Brand-  {location.state.company}
                        </span>
                        <h5 class="text-uppercase">Name-  {location.state.name}</h5>
                        <div class="price d-flex flex-row align-items-center">
                          {" "}
                          <span style={{ margin: "4px" }} class="act-price">
                            price-  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>{location.state.price}
                          </span>
                          {/* <div class="ml-2">
                            {" "}
                            <small class="dis-price">
                              {location.state.price * 1.2}
                            </small>{" "}
                            <span>20% OFF</span>{" "}
                          </div> */}
                        </div>
                      </div>
                      <p class="about"> Discription-  {location.state.discription}</p>
                      <div class="sizes mt-5"></div>
                      <div class="cart mt-4 align-items-center">
                        {" "}
                        {/* <img src={clothsize} alt="Chart Image"/> */}
                        <button class="btn btn-danger text-uppercase mr-2 px-4">
                          <Link
                            style={{ textDecoration: "None", color: "black" }}
                            to="/buynow"
                          >
                            Buy Now
                          </Link>
                        </button>{" "}
                        <i class="fa fa-heart text-muted"></i>{" "}
                        <i class="fa fa-share-alt text-muted"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section style={{ backgroundColor: "#eee;" }}>
                <div style={{ borderRadius: "0%" }} class="card">
                  <div class="card-body">
                    <div
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        fontSize: "extra-large",
                      }}
                    >
                      Comments
                    </div>
                    {con.map((item, index) => (
                      <div class="d-flex flex-start align-items-center">
                        <img
                          class="rounded-circle shadow-1-strong me-3"
                          src="https://upload.wikimedia.org/wikipedia/en/d/d6/CobraKaiTitleScreen.png"
                          alt="avatar"
                          width="50"
                          height="50"
                        />
                        <div>
                          <p class="fw-bold text-primary mb-1">
                            {item.userName}
                          </p>
                          {/* <p class="text-muted small mb-0">
                            Shared publicly - Jan 2020
                          </p> */}
                          {sentiment.analyze(item.comment)?.score===0?nut:sentiment.analyze(item.product)?.score<0?sa:hap}
                          <span > {item.comment}
                          <span style={{marginLeft:'13px'}} class="emoz">{sentiment.analyze(item.comment)?.score ===0?
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="dark" class="bi bi-emoji-expressionless-fill" viewBox="0 0 16 16">
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
                        </svg>
                          : sentiment.analyze(item.comment)?.score<0?<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="red" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
  </svg>:
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="green" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
}</span>
                          </span>
                          
                          {/* <p class="emoz">{sentiment.analyze(item.comment)?.score ===0?'nutral' : sentiment.analyze(item.comment)?.score<0?'sad':'happy'}</p> */}
                         
                        </div>
                        <br />
                        <br />
                        <br />
                      </div>
                    ))}
                     <div>Neutral-{neutral}</div>
                     <div>happy{happy}</div>
                     <div>sad{sad}</div>
                    <div class="small d-flex justify-content-start">
                      <a href="#!" class="d-flex align-items-center me-3">
                        <i class="far fa-thumbs-up me-2"></i>
                        <p class="mb-0">Like</p>
                      </a>
                      <a href="#!" class="d-flex align-items-center me-3">
                        <i class="far fa-comment-dots me-2"></i>
                        <p class="mb-0">Comment</p>
                      </a>
                      <a href="#!" class="d-flex align-items-center me-3">
                        <i class="fas fa-share me-2"></i>
                        <p class="mb-0">Share</p>
                      </a>
                    </div>
                  </div>
                  <div
                    class="card-footer py-3 border-0"
                    style={{ backgroundColor: "#f8f9fa;" }}
                  >
                    <div class="d-flex flex-start w-100">
                      <img
                        class="rounded-circle shadow-1-strong me-3"
                        src="https://upload.wikimedia.org/wikipedia/en/d/d6/CobraKaiTitleScreen.png"
                        alt="avatar"
                        width="40"
                        height="40"
                      />
                      <div class="form-outline w-100">
                        <textarea
                          class="form-control"
                          id="textAreaExample"
                          rows="4"
                          style={{ background: "#fff;" }}
                          value={comment}
                          onChange={handleCommentChange}
                        ></textarea>
                        <label class="form-label" for="textAreaExample">
                          Comment
                        </label>
                      </div>
                    </div>

                    <div class="float-end mt-2 pt-1">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onClick={collectdata}
                      >
                        Post comment
                      </button>
                      <button
                        style={{ margin: "20px" }}
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};
export default ProductDetails;