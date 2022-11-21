import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/slices/cartSlice';
import { addToFavorites } from '../features/slices/favoritesSlice';
import { auth } from '../firebase';

import '../styles/Cards.css';

import Add from '../assets/add.png';
import Heart from '../assets/heart.png';
import Favorite from '../assets/favorite.png';

const Cards = ({
  id,
  name,
  image,
  price,
  summary,
  description,
  inFavorites,
  quantity,
}) => {
  const dispatch = useDispatch();

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
      <div className="componentsDiv">
        <img
          src={Add}
          onClick={() => {
            dispatch(
              addToCart({
                itemId: id,
                itemName: name,
                itemImage: image,
                price,
                cost: price,
                summary,
                description,
                quantity,
                user: auth.currentUser.email,
              }),
            );
          }}
          alt="add"
          className="addButton"
        />
        <p>
          {inFavorites ? (
            <img src={Favorite} alt="favorites" className="favoritesButton" />
          ) : (
            <img
              src={Heart}
              onClick={() => {
                dispatch(
                  addToFavorites({
                    itemId: id,
                    itemName: name,
                    itemImage: image,
                    price,
                    summary,
                    description,
                    quantity,
                    user: auth.currentUser.email,
                  }),
                );
              }}
              alt="favorites"
              className="favoritesButton"
            />
          )}
        </p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Cards;
