import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PropTypes from 'prop-types';
import '../styles/Cards.css';

const LandingCart = ({
  name, image, price, summary, description,
}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  return (
    <div className="mainDivss">
      <img src={image} alt="product" className="productImage" />
      <div className="contentSection">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <p className="nameDivs">{name}</p>
        </OverlayTrigger>
        <p className="priceDiv">
          Ksh.
          {price}
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

LandingCart.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LandingCart;
