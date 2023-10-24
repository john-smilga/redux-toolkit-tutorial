import CardItem from "./CardItem"
import { useSelector, useDispatch } from "react-redux"
import { openModal } from "../features/modal/modalSlice"

export default function CardContainer() {
    const { cartItems, amount, total } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    if(amount === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <>
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                </header>
                <div>
                    {cartItems.map((item) => (
                        <CardItem key={item.id} {...item} />
                    ))}
                </div>

                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>total <span>${total}</span></h4>
                    </div>
                    <button 
                        className="btn clear-btn" 
                        onClick={() => dispatch(openModal())}
                    >
                        clear cart
                    </button>
                </footer>
            </section>
        </>
    )
}