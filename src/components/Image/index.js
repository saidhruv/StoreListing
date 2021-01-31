import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../../Images/defaultImage.png";
import "./styles.css";

const Image = ({ customStyle, height, source, square, width }) => {
  return (
    <img
      alt=""
      className={`baseStyle ${customStyle}`}
      height={height}
      src={source || DefaultImage}
      width={square ? height : width}
    />
  );
};

Image.propTypes = {
  customStyle: PropTypes.string,
  height: PropTypes.string.isRequired,
  source: PropTypes.string,
  square: PropTypes.bool,
  width: PropTypes.string,
};

Image.defaultProps = {
  customStyle: "",
  source: "",
  square: false,
  width: "10px",
};

export default Image;
