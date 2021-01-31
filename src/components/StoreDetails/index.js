import PropTypes from "prop-types";
import React from "react";
import FreeDelivery from "../../Images/freeDelivery.svg";
import Protection from "../../Images/protection.svg";
import Support from "../../Images/support.svg";
import Whatsapp from "../../Images/whatsapp.svg";
import Image from "../Image";
import "./styles.css";

const StoreDetails = ({ name, address }) => {
  return (
    <div className="pageFooterContainer">
      <div className="upsellContainer">
        <div className="upsellItem">
          <Image height="48px" source={FreeDelivery} square />
          <div className="upsellText">Free Delivery</div>
          <div className="upsellTextSub">(above 500)</div>
        </div>
        <div className="upsellItem">
          <Image height="48px" source={Protection} square />
          <div className="upsellText">Buyer Protection</div>
        </div>
        <div className="upsellItem">
          <Image height="48px" source={Support} square />
          <div className="upsellText">Customer Support</div>
        </div>
      </div>
      <div className="storeDetailsContainer">
        <div className="storeDetailsContainerTitle">STORE DETAILS</div>
        <div className="storeDetailsTitle">{name}</div>
        <div className="storeDetailsAddress">{address}</div>
        <img
          alt=""
          className="chatWithUs"
          height="32px"
          src={Whatsapp}
          width="141px"
        />
      </div>
    </div>
  );
};

StoreDetails.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default StoreDetails;
