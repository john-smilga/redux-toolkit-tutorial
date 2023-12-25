import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return amount < 1 ? (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4 className="empty-cart"> is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(clearCart())} className="btn clear-btn">
          Clear Item
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
