import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "../styles/Cards.css";

const LandingCart = ({ name, image, price, summary, description }) => {
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
                <p className="priceDiv">Ksh. {price}</p>
                <p>{summary}</p>
            </div>
        </div>
    );
};

export default LandingCart;
