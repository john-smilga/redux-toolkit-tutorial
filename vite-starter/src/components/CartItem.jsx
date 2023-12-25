import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import { removeItems } from "../features/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          onClick={() => dispatch(removeItems(id))}
          className="remove-btn"
        >
          {" "}
          remove{" "}
        </button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
