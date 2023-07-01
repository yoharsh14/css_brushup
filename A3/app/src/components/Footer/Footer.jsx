import React from "react";
import "./Footer.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          © 2023 Airbnb, Inc. · Privacy · Terms · Sitemap Company details ·
          Destinations
        </div>
        <div className="right">
          <div>
            <GoGlobe />
          </div>
          <div>English(IN) Choose a currency ₹ INR Support & resources</div>
          <div>
            <MdOutlineKeyboardArrowUp />
          </div>
        </div>
      </div>
    </>
  );
}
