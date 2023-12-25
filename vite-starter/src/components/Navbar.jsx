import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(useSelector((store) => console.log(store)));
  return (
    <nav>
      <div className="nav-center">
        <h3>redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
