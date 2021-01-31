import PropTypes from "prop-types";
import React from "react";
import ListHeader from "../ListHeader";
import ListItem from "./ListItem";
import "./styles.css";

const VerticalList = ({ data }) => {
  return (
    <>
      {data.map((category, index) => {
        const { categoryHeader, categoryListing } = category;
        return (
          <div key={`category-${index}`}>
            <ListHeader title={categoryHeader} />
            {categoryListing.map((item, index) => (
              <ListItem
                key={`categoryListing-${index}`}
                actualPricePerUnit={
                  item.actualPricePerUnit ? item.actualPricePerUnit : ""
                }
                isAvailable={item.isAvailable}
                offer={item.offer}
                pricePerUnit={item.pricePerUnit}
                source={item.image}
                title={item.name}
                unit={item.unit}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

VerticalList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        categoryHeader: PropTypes.string,
        categoryListing: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
          })
        ),
      })
    )
  ).isRequired,
};

export default VerticalList;
