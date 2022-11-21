import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "../styles/Cart.css";

import Delete from "../assets/delete.png";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/slices/cartSlice";
import { updateCart } from "../features/slices/cartSlice";

import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";

const CartsCard = ({
  id,
  name,
  image,
  price,
  cost,
  summary,
  description,
  all,
}) => {
  const [costs, setCosts] = useState(price);
  const [quantity, setQuantity] = useState(all);
  const dispatch = useDispatch();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );
  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <hr className="my-4" />
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <p className="nameDivs">{name}</p>
        </OverlayTrigger>
        <h6 className="text-black mb-0">{summary}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <img
          src={Minus}
          onClick={() => {
            if (quantity > 1) {
              dispatch(
                updateCart({
                  id: id,
                  data: {
                    quantity: quantity - 1,
                    cost: cost - price,
                  },
                })
              );
              setQuantity(quantity - 1);
              setCosts((quantity - 1) * price);
            }
          }}
          alt="plus"
          className="plusIcon"
        />
        <p
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {quantity}
        </p>
        <img
          src={Plus}
          onClick={() => {
            dispatch(
              updateCart({
                id: id,
                data: {
                  quantity: quantity + 1,
                  cost: cost + price,
                },
              })
            );
            setQuantity(quantity + 1);
            setCosts((quantity + 1) * price);
          }}
          alt="plus"
          className="plusIcon"
        />
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">Ksh {costs}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <img
          src={Delete}
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
          alt="plus"
          className="plusIcon"
        />
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default CartsCard;
