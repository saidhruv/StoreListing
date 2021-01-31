import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

const ListHeader = ({ title }) => {
  return <div className="title">{title}</div>;
};

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListHeader;
