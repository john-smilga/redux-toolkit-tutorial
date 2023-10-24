import { closeModal } from "../features/modal/modalSlice"
import { clearCart } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"

export default function Modal() {
    const dispatch = useDispatch()

    return (
        <>
            <aside className="modal-container">
                <div className="modal">
                    <h4>Remove all items from shopping cart?</h4>
                    <div className="btn-container">
                        <button className="btn confirm-btn" onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}>
                            Confirm
                        </button>

                        <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>
                            Cancel
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}