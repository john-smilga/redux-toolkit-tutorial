import { CartIcon, Testing } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => {
    store.cart;
  });
  return (
    <nav>
      <div className="nav-center">
        <h3>redusx toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <Testing />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
