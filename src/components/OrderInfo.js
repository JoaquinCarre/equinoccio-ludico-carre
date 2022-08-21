import { useContext } from 'react';
import CartContext from "../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { deleteOrderCart } from '../firebase.js';

const OrderInfo = () => {
  const { orderId, setOrderId } = useContext(CartContext);

  const navigate = useNavigate();

  const orderLoaded = JSON.parse(localStorage.getItem('actualOrder'));

  if (!orderId) {
    return (<div className='fs-1 fw-bold p-4'>No hay Orden de Compra Pendiente</div>)
  } else {
    return (
      <>
        <div><h2 className='titlePages'>Detalles de la Orden de Compra</h2></div>
        <div className='container border border-dark'>
          <div className='fs-3 m-2'>Tu número de orden es: <strong>{orderId}</strong></div>
          <div className='fs-1 fw-bold m-4'>Datos del comprador</div>
          <div className='fs-3 m-2'>Nombre completo: <strong>{orderLoaded.buyer.name.name}</strong></div>
          <div className='fs-3 m-2'>E-mail: <strong>{orderLoaded.buyer.email.email}</strong></div>
          <div className='fs-3 m-2'>Teléfono: <strong>{orderLoaded.buyer.phone.phone}</strong></div>
          <div className='fs-3 m-2'>Calle: <strong>{orderLoaded.buyer.street1.street1}</strong></div>
          {!orderLoaded.buyer.street2.street2 ?
            <></>
            :
            <div className='fs-3 m-2'>Calle Alternativa: <strong>{orderLoaded.buyer.street2.street2}</strong></div>
          }
          <div className='fs-3 m-2'>Ciudad: <strong>{orderLoaded.buyer.city.city}</strong></div>
          <div className='fs-3 m-2'>Provincia: <strong>{orderLoaded.buyer.state.state}</strong></div>
          <div className='fs-3 m-2'>Código Postal: <strong>{orderLoaded.buyer.zipcode.zipcode}</strong></div>
        </div>
        <button className='btn btn-danger m-3 mx-1' onClick={() => { localStorage.removeItem('actualOrder'); deleteOrderCart(orderId); setOrderId(''); navigate(`/cart`); }}>CANCELAR ORDEN</button>
        <button className='btn btn-success m-3 mx-1' onClick={() => { navigate('/cartStep2') }}>CONTINUAR CON EL PAGO</button>
      </>
    )
  }
}

export default OrderInfo