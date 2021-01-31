import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import SearchBar from "../SearchBar";
import "./styles.css";
import TrustedSellerTag from "./TrustedSellerTag";

const Header = ({ logo, partnerName, verifiedSeller }) => {
  return (
    <div className="container">
      <div className="header">
        <Image height="56px" source={logo} square />
        <div className="titleContainer">
          <div>{partnerName}</div>
          {verifiedSeller && <TrustedSellerTag />}
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  partnerName: PropTypes.string.isRequired,
  verifiedSeller: PropTypes.bool.isRequired,
};

export default Header;
