import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "../styles/Purchases.css";

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
                <p className="priceSection">Ksh. {price}</p>
                <p>Quantity: {quantity}</p>
                <p className="descriptionSection">{summary}</p>
            </div>
        </div>
    );
};

export default PurchaseCard;
