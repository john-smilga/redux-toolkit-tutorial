import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((store => store.modal))
  const { cartItems, isLoading } = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CardContainer />
    </main>
  )
}
export default App;
