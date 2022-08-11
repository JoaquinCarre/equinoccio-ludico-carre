import React, { useContext } from 'react';
import CartContext from "../context/CartContext";

const CartBuyed = () => {

    const { orderId } = useContext(CartContext);

    return (
        <>
            <div>¡Gracias por confiar en nosotros!</div>
            <div>Tu número de orden es: {orderId}</div>
            <div>En breve nos comunicaremos con vos</div>
        </>
    )
}

export default CartBuyed