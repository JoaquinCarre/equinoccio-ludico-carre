import { createContext, useState } from 'react';
import { addOrdersCart } from '../firebase.js';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalP, setTotalP] = useState(0);
    const [totalQ, setTotalQ] = useState(0);
    const [orderId, setOrderId] = useState("");
    const [orderDoc, setOrderDoc] = useState('');
    const [stockFree, setStockFree] = useState (7); /* poner valor inicial de cada producto para el stock */


    const itemStock = (initial, unitsChoosed) => {
        let stockCalc = initial;
        console.log(initial);
        console.log(unitsChoosed);
        console.log('11111s', stockCalc)
        if (unitsChoosed) {
            stockCalc = stockFree - unitsChoosed
            setStockFree(stockCalc);
        }
    };

    const isInCart = (itemId) => {
        const didExist = cart.find(el => el.title === itemId);
        return didExist;
    };

    const addQuantity = (itemQ, itemId) => {
        const cartQuantity = cart.filter(el => el.title === itemId);
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
        const itemIsInCart = isInCart(item.title);
        if (!itemIsInCart) {
            const cartAddNewItem = [...cart, item];
            setCart(cartAddNewItem);
        } else {
            const addItemQuantity = addQuantity(item.quantity, item.title);
            const removeRepeatItemCart = cart.filter(el => el.title !== item.title);
            //sumarle al producto que se haya elegido la cantidad agregada desde ItemDetail al carrito para que el mismo no se duplique 
            setCart([...removeRepeatItemCart, addItemQuantity]);
        }
    };
    console.log(cart);

    const removeItem = (item) => {
        const cartRemoveItem = cart.filter(el => el.title !== item.title);
        setCart(cartRemoveItem);
    }

    const clear = () => {
        setCart([]);
    }

    const sendOrder = (name, phone, email, street1, street2, city, state, zipcode) => {
        const order = {
            buyer: { name: { name }, phone: { phone }, email: { email }, street1: { street1 }, street2: { street2 }, city: { city }, state: { state }, zipcode: { zipcode } },
            item: cart.map((el) => ({ id: el.title, title: el.title, price: el.price })),
            date: new Date(),
            total: totalP,
        }
        localStorage.setItem('actualOrder', JSON.stringify(order));
        addOrdersCart(order).then(({ id }) => setOrderId(id));
        console.log(order);
    }

    const data = { cart, isInCart, addTotalPrice, totalP, setTotalP, addTotalQuantity, totalQ, setTotalQ, addItem, removeItem, clear, sendOrder, orderId, setOrderId, orderDoc, setOrderDoc, stockFree, itemStock }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
export { CartProvider };