import { ChevronDown, ChevronUp } from "./ui/icons"
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease } from "../features/cart/cartSlice"


export default function CardItem({ id, title, price, img, amount }) {
    const dispatch = useDispatch()

    return (
        <article className="cart-item">
            <img src={img} alt="item-image" />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
                    remove
                </button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch(increase({ id }))}>
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={() => dispatch(decrease({ id }))}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}