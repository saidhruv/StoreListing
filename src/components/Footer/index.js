import React from "react";
import Home from "../../Images/home.svg";
import Bag from "../../Images/bag.svg";
import Orders from "../../Images/orders.svg";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerButton activeButtonBackground">
        <div className="footerButtonContent">
          <img
            alt=""
            className="footerButtonImage"
            height="24px"
            src={Home}
            width="24px"
          />
          <div className="footerButtonText activeButton">Home</div>
        </div>
      </div>
      <div className="footerButton">
        <div className="footerButtonContent">
          <img
            alt=""
            className="footerButtonImage"
            height="24px"
            src={Bag}
            width="24px"
          />
          <div className="footerButtonText">Bag</div>
        </div>
      </div>
      <div className="footerButton">
        <div className="footerButtonContent">
          <img
            alt=""
            className="footerButtonImage"
            height="24px"
            src={Orders}
            width="24px"
          />
          <div className="footerButtonText">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
