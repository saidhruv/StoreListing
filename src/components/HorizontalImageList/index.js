/* eslint-disable react/jsx-no-comment-textnodes */
import PropTypes from "prop-types";
import React from "react";
import ListHeader from "../ListHeader";
import HorizontalImageListItem from "./HorizontalImageListItem";
import "./styles.css";

const HorizontalImageList = ({ data }) => {
  return (
    <>
      <ListHeader title={data.categoryHeader} />
      <div className="horizontalList">
        {data.categoryListing.map((item, index) => (
          <HorizontalImageListItem
            key={`categoryListing-${index}`}
            source={item.image}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

HorizontalImageList.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({})).isRequired,
};

export default HorizontalImageList;
