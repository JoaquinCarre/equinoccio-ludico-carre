import { useContext } from 'react';
import CartContext from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

const CartBuyed = () => {
    const { orderDoc, setOrderDoc, setOrderId } = useContext(CartContext);

    const navigate = useNavigate();

    if (!orderDoc) {
        return (<div className='fs-1 fw-bold p-4'>CARGANDO ESTADO DE COMPRA...</div>)
    } else {
        setOrderId('');
        return (
            <>
                <div><h2 className='titlePages'>¡Gracias por confiar en nosotros!</h2></div>
                <div className='container border border-dark'>
                    <div className='fs-3 m-2'>Tu número de orden es: <strong>{orderDoc}</strong></div>
                    <div className='fs-4 m-2'>En breve nos comunicaremos con vos</div>
                </div>
                <button className='btn btn-success mt-3' onClick={() => {setOrderDoc(''); navigate ('/tienda')}}>Volver a la Tienda</button>
            </>
        )
    }
}

export default CartBuyed