import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../context/CartContext";

const CartWidget = (total) => {
    const { cart, addTotalQuantity, totalQ, setTotalQ } = useContext(CartContext);

    useEffect(() => {
        addTotalQuantity()
    }, []);

    useEffect(() => {
        setTotalQ(0);
        addTotalQuantity()
    }, [cart]);

    return (
        <Link to="/cart" className="ms-auto">
            <button className="p-1 btn btn-outline-primary position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="badge position-absolute top-0 start-100 translate-middle bg-danger">{totalQ}</span>
            </button>
        </Link>
    )
}

export default CartWidget;