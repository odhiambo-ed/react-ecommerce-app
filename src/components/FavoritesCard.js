import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "../styles/FavoritesCard.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/cartSlice";
import { removeFromFavorites } from "../features/slices/favoritesSlice";
import { auth } from "../firebase";

import Add from "../assets/add.png";
import Delete from "../assets/delete.png";

const FavoritesCard = ({
  id,
  name,
  image,
  price,
  summary,
  description,
  quantity,
}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  const dispatch = useDispatch();
  return (
    <div className="mainDiv">
      <img src={image} alt="product" className="imageSection" />
      <div className="contentSection">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <p className="nameDivs">{name}</p>
        </OverlayTrigger>
        <p className="priceDiv">Ksh. {price}</p>
        <p>{summary}</p>
      </div>
      <div className="mainSection">
        <img
          src={Add}
          onClick={() => {
            dispatch(
              addToCart({
                itemId: id,
                itemName: name,
                itemImage: image,
                price: price,
                cost: price,
                summary: summary,
                description: description,
                quantity: quantity,
                user: auth.currentUser.email,
              })
            );
          }}
          alt="add"
          className="addButton"
        />
        <img
          src={Delete}
          onClick={() => {
            dispatch(removeFromFavorites(id));
          }}
          alt="favorites"
          className="deleteButton"
        />
      </div>
    </div>
  );
};

export default FavoritesCard;
