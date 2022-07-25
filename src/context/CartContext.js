import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        const didExist = cart.find(el => el.id === itemId);
        return didExist;
    };

    const addQuantity = (itemQ, itemId) => {
        const itemQuantity = itemQ;
        const cartQuantity = cart.filter(el => el.id === itemId);
        const addItemCartQuantity = { ...cartQuantity[0], quantity: cartQuantity[0].quantity + itemQ }
        return addItemCartQuantity;
    }

    const addItem = (item) => {
        const itemIsInCart = isInCart(item.id);
        if (!itemIsInCart) {
            const cartAddNewItem = [...cart, item];
            setCart(cartAddNewItem);
        } else {
            const addItemQuantity = addQuantity(item.quantity, item.id);
            const removeRepeatItemCart = cart.filter(el => el.id !== item.id);
            setCart([...removeRepeatItemCart, addItemQuantity]);
            //sumarle al producto que se haya elegido la cantidad agrtegada desde ItemDetail al carrito para que el mismo no se duplique 
        }
    };
    console.log(cart);

    const removeItem = (itemId) => {
        const cartRemoveItem = itemId.map(el => el.id !== itemId);
        setCart(cartRemoveItem);
    }

    const clear = () => {
        setCart([]);
    }

    const data = { cart, isInCart, addItem, removeItem, clear }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
export { CartProvider };