import { createContext, useState } from 'react';
import db from '../firebase.js';
import { addDoc, collection, doc } from 'firebase/firestore';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalP, setTotalP] = useState(0);
    const [totalQ, setTotalQ] = useState(0);
    const [orderId, setOrderId] = useState("");

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
        const itemIsInCart = isInCart(item.title);
        if (!itemIsInCart) {
            const cartAddNewItem = [...cart, item];
            setCart(cartAddNewItem);
        } else {
            const addItemQuantity = addQuantity(item.quantity, item.title);
            const removeRepeatItemCart = cart.filter(el => el.title !== item.title);
            setCart([...removeRepeatItemCart, addItemQuantity]);
            //sumarle al producto que se haya elegido la cantidad agrtegada desde ItemDetail al carrito para que el mismo no se duplique 
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

    const sendOrder = async () => {
        const order = {
            buyer: { name: "Jorge", phone: "(341)437584", email: "jorge@jugador.com" },
            item: cart.map((el) => ({ id: el.title, title: el.title, price: el.price })),
            date: new Date(),
            total: totalP,
        }
        const ordersCollection = collection(db, "orders");
        await addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        console.log (order);
        alert ("Compra exitosa, tu número de orden es: " + orderId);
        setCart([]);
    }

    const data = { cart, isInCart, addTotalPrice, totalP, setTotalP, addTotalQuantity, totalQ, setTotalQ, addItem, removeItem, clear, sendOrder }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
export { CartProvider };