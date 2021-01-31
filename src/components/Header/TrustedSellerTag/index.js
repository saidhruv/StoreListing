import React from 'react';
import Tick from '../../../Images/tick.svg';
import './styles.css';

const TrustedSellerTag = () => {
  return (
    <div className="content">
      <img src={Tick} alt="" className="tick"/>
      TRUSTED SELLER
    </div>
  );
}

export default TrustedSellerTag;
