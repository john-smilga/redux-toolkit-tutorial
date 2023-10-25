import { ChevronDown, ChevronUp } from "./ui/icons"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addItem } from "../features/cart/cartSlice"


export default function Item({ id, title, price, img }) {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)

    const addToCart = () => {
        dispatch(addItem({
            id,
            title,
            price,
            img,
            amount
        }))
    }

    const addOne = () => {
        setAmount(amount + 1)
    }

    const reduceOne = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    return (
        <article className="cart-item">
            <img src={img} alt="item-image" />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={addToCart}>
                    Add to cart
                </button>
            </div>
            <div>
                <button className="amount-btn" onClick={addOne}>
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={reduceOne}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}