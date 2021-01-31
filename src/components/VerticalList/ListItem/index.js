import PropTypes from "prop-types";
import React from "react";
import Image from "../../Image";
import Plus from "../../../Images/plus.svg";
import "./styles.css";

const ListItem = ({
  title,
  source,
  unit,
  pricePerUnit,
  actualPricePerUnit,
  isAvailable,
  offer,
}) => {
  return (
    <div className="verticalListContainer">
      <div className="verticalListImageContainer">
        <Image height="96px" source={source} square />
        {offer && <div className="verticalListOffer">{offer}</div>}
      </div>
      <div className="verticalListItemContent">
        <div className="verticalListItemTitle">{title}</div>
        <div className="unit">{unit}</div>
        <div className="priceAndActionContainer">
          <div className="priceContainer">
            <div className="price">{`₹${pricePerUnit}`}</div>
            {actualPricePerUnit && (
              <div className="actualPrice">{`₹${actualPricePerUnit}`}</div>
            )}
          </div>
          {isAvailable ? (
            <div className="addButton">
              ADD{" "}
              <img
                alt=""
                className="addButtonPlus"
                height="12px"
                src={Plus}
                width="12px"
              />
            </div>
          ) : (
            <div className="outOfStock">Out of Stock</div>
          )}
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListItem;
