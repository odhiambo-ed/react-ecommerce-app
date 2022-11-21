import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PropTypes from 'prop-types';
import '../styles/Purchases.css';

const PurchaseCard = ({
  name,
  image,
  price,
  quantity,
  summary,
  description,
}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  return (
    <div className="mainDiv">
      <img src={image} alt="product" className="imageSection" />
      <div className="contentSection">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <p className="nameDivs">{name}</p>
        </OverlayTrigger>
        <p className="priceSection">
          Ksh.
          {price}
        </p>
        <p>
          Quantity:
          {quantity}
        </p>
        <p className="descriptionSection">{summary}</p>
      </div>
    </div>
  );
};

PurchaseCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PurchaseCard;
