import React from "react";
import "../App.css";
import Footer from "./Footer";
import creater1 from "../image/creater1.png";
import creater2 from "../image/creater2.png";
const Profile = () => {
  return (
    <>
      <div class="mainprofile">
        <div>
          <img class="profile1" src={creater2} alt="..." />
        </div>
        <div>
          <img class="profile1" src={creater1} alt="..." />
        </div>
        <div>
          <img class="profile1" src={creater2} alt="..." />
        </div>
      </div>
      <div class="mainprofile">
        <div class="">b1</div>
        <div>b2</div>
        <div>b3</div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
