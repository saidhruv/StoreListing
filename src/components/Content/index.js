import React from "react";
import data from "../../data.json";
import Header from "../Header";
import HorizontalImageList from "../HorizontalImageList";
import StoreDetails from "../StoreDetails";
import VerticalList from "../VerticalList";
import Footer from "../Footer";

const Content = () => {
  const {
    partnerName,
    verifiedSeller,
    logo,
    listing,
    addressLine1,
    addressLine2,
  } = data;
  const bestsellers = listing.filter(
    (item) => item.categoryHeader === "Bestsellers"
  );
  const listingItems = listing.filter(
    (item) => item.categoryHeader !== "Bestsellers"
  );
  return (
    <>
      <Header
        logo={logo}
        partnerName={partnerName}
        verifiedSeller={verifiedSeller}
      />
      {bestsellers.length > 0 && <HorizontalImageList data={bestsellers[0]} />}
      {listingItems.length > 0 && <VerticalList data={listingItems} />}
      <StoreDetails
        address={`${addressLine1} ${addressLine2}`}
        name={partnerName}
      />
      <Footer />
    </>
  );
};

export default Content;
