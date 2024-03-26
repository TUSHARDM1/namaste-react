import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    clearEntireCart = () => {
        dispatch(clearCart());
    }
    clearLastAdded = () => {
        dispatch(removeItem());
    }
    return(
        <div>
            <button className="m-4 bg-green-300 p-2 rounded"
            onClick={clearEntireCart}>
                Clear Cart
            </button>
            <button className="m-4 bg-green-300 p-2 rounded"
            onClick={clearLastAdded}>
                Remove Last Added Item
            </button>
            {cartItems.length ? cartItems?.join(", ") : "Please add items in cart"}
        </div>
    )
}

export default Cart;