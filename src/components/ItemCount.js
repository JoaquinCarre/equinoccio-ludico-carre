import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { deleteOrderCart } from '../firebase.js';

const ItemCount = ({ stock, initial, onAdd }) => {
    const { orderId, setOrderId } = useContext(CartContext);

    const navigate = useNavigate();

    const [buy, setBuy] = useState(false);
    const [count, setCount] = useState(initial);
    const [isOrder, setIsOrder] = useState('');

    const incrementar = () => {
        setCount(count + 1);
    };
    const decrementar = () => {
        setCount(ValAnt => ValAnt > initial ? count - 1 : count);
    };

    const orderLoaded = JSON.parse(localStorage.getItem('actualOrder'));

    console.log('ID orden de compra:', orderId);

    useEffect(() => {
        setIsOrder(orderLoaded);
    }, [orderId]);

    if (buy === false) {
        if (isOrder) {
            return (
                <div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger" disabled>-</button>
                        <h4 className="px-3">{count}</h4>
                        <button className="btn btn-success" disabled>+</button>
                    </div>
                    <div>
                        <button type='button' className="btn btn-light btn-outline-dark m-3" disabled>Agregar al Carrito</button>
                    </div>
                    <p className="text-danger fs-4 fw-bold">Debe finalizar o cancelar la orden realizada para seguir añadiendo artículos al carrito</p>
                    <button className='btn btn-danger m-3 mx-1' onClick={() => { localStorage.removeItem('actualOrder'); deleteOrderCart(orderId); setOrderId(''); navigate(`/tienda`); }}>CANCELAR ORDEN</button>
                    <button className='btn btn-success m-3 mx-1' onClick={() => { navigate('/cartStep2') }}>CONTINUAR CON EL PAGO</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger" onClick={decrementar}>-</button>
                        <h4 className="px-3">{count}</h4>
                        <button className="btn btn-success" onClick={incrementar}>+</button>
                    </div>
                    <div>
                        {count <= stock ?
                            <button className="btn btn-light btn-outline-dark m-3" onClick={() => { onAdd(count); setBuy(true) }}>Agregar al Carrito</button>
                            :
                            <button className="btn btn-light btn-outline-dark m-3 disabled">Agregar al Carrito</button>}
                    </div>
                    {count <= stock ? <p>Productos disponibles: {stock} unidades</p> : <p className="text-danger">¡No hay más que {stock} unidades disponibles!</p>}
                </div>
            )
        }
    } else {
        return (<><div className="d-flex justify-content-center">
            <img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" width={50} alt="checked icon" />
            <p className="fs-2">Agregaste {count} unidades</p>
        </div>
            <div>
                <Link to="/tienda" ><button className="btn btn-primary opacity-75">CONTINUAR COMPRANDO...</button></Link> <Link to="/cart" ><button className="btn btn-success">IR AL CARRITO</button></Link>
            </div>
        </>)
    }

}

export default ItemCount;