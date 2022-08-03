import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../context/CartContext";
import logo1 from '../images/cajaRobomeke.png';
import logo2 from '../images/cajaPancú.png';
import logo3 from '../images/cajaRoliwar.png';
import logo4 from '../images/cajaEdificiosLocos.png';

const Cart = () => {
    const listLogos = [logo1, logo2, logo3, logo4];
    const { cart, removeItem, clear, addTotalPrice, totalP, setTotalP, sendOrder } = useContext(CartContext);

    useEffect(() => {
        addTotalPrice()
    }, []);

    useEffect(() => {
        setTotalP(0);
        addTotalPrice()
    }, [cart]);

    return (
        <div className="container">
            <table className="table caption-top">
                <caption className="text-dark text-center">Mi Carrito de Compras</caption>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Precio Final</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {cart.length !== 0 ?
                        cart.map((el) => (
                            <tr>
                                <th scope="row"><img width={50} src={listLogos[el.pos - 1]} alt={el.id} className='img-fluid' /></th>
                                <td>{el.title}</td>
                                <td>{el.quantity}</td>
                                <td>${el.price}</td>
                                <td>${el.price * el.quantity}</td>
                                <td><button className="btn btn-warning" onClick={() => removeItem(el)}>[X]</button></td>
                            </tr>
                        )) :
                        <tr className="table-light">
                            <td colspan="5">No hay productos agregados</td>
                            <td><Link to="/tienda"><button className="btn btn-primary">Ir a la Tienda</button></Link></td>
                        </tr>}
                </tbody>
                
                {cart.length !== 0 ?
                <tfoot className="table-dark">
                    <tr>
                        <td colspan="3"></td>
                        <th>Precio Total</th>
                        <td>${totalP}</td>
                        <td><button className="btn btn-danger" onClick={() => clear()}>Eliminar Todo</button></td>
                    </tr>
                    <tr>
                    <th scope="col"></th>
                        <td colspan="6">
                            <div className="d-flex justify-content-end">
                            <Link to="/tienda"><button className="btn btn-light mx-2">Agregar más productos</button></Link>
                            <button className="btn btn-success" onClick={sendOrder}>Confirmar Compra</button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
                    :
                    <></>
                } 
                

            </table>
        </div>
    );

};

export default Cart;