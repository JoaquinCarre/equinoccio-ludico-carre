import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalP, setTotalP] = useState(0);
    const [totalQ, setTotalQ] = useState(0);

    const isInCart = (itemId) => {
        const didExist = cart.find(el => el.id === itemId);
        return didExist;
    };

    const addQuantity = (itemQ, itemId) => {
        const cartQuantity = cart.filter(el => el.id === itemId);
        const addItemCartQuantity = { ...cartQuantity[0], quantity: cartQuantity[0].quantity + itemQ }
        return addItemCartQuantity;
    }

    const addTotalPrice = () => {
        cart.map((el) => { return setTotalP((current) => { return (Number(current) + (Number(el.quantity * el.price))) }) });
    };

    const addTotalQuantity = () => {
        cart.map((elm) => { return setTotalQ((current) => { return (Number(current) + (Number(elm.quantity))) }) });
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

    const removeItem = (item) => {
        const cartRemoveItem = cart.filter(el => el.id !== item.id);
        setCart(cartRemoveItem);
    }

    const clear = () => {
        setCart([]);
    }

    const data = { cart, isInCart, addTotalPrice, totalP, setTotalP, addTotalQuantity, totalQ, setTotalQ, addItem, removeItem, clear }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
export { CartProvider };