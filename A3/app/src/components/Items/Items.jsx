import React from "react";
import "./Items.css"
import img1 from "../../Constants/images/img1.webp";
import img2 from "../../Constants/images/img2.webp";
import img3 from "../../Constants/images/img3.webp";
import img4 from "../../Constants/images/img4.webp";
import img5 from "../../Constants/images/img5.webp";
import img6 from "../../Constants/images/img6.webp";
import img7 from "../../Constants/images/img7.webp";
import img8 from "../../Constants/images/img8.webp";
import { TbHeartFilled } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
export default function Items() {
  return (
    <>
    <div className="items">

      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img1} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights  · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img2} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img3} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img4} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img5} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img6} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img7} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img8} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div>
      {/* <div className="card">
        <div className="header">
          <TbHeartFilled  className="heart"/>
          <img src={img8} alt="" />
        </div>
        <div className="details">
          <div className="first">
            <div className="name">Valenica, Spain</div>
            <div className="rating">
              <AiFillStar />
              <div>4.87</div>
            </div>
          </div>
          <div className="second">Stay with Sagrario · Coach</div>
          <div className="third">5 nights · 13-18 Nov</div>
        </div>
        <div className="price"><u>₹21,409 total before taxes</u></div>
      </div> */}
    </div>
    </>
  );
}
