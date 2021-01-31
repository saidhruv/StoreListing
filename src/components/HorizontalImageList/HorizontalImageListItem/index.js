import PropTypes from "prop-types";
import React from "react";
import Image from "../../Image";
import "./styles.css";

const HorizontalImageListItem = ({ title, source }) => {
  return (
    <div className="horizontalImageContainer">
      <Image height="124px" source={source} square />
      <div className="horizontalListItemOverlay" />
      <div className="horizontalListItemTitle">{title}</div>
    </div>
  );
};

HorizontalImageListItem.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HorizontalImageListItem;
