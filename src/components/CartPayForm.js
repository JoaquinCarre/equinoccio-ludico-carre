import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CCImage from '../images/creditCard.png';
import CartContext from "../context/CartContext";
import { useForm } from "../hooks/useForm";
import { deleteOrderCart } from '../firebase.js';

const CartPayForm = () => {
    const { clear, orderId, setOrderId, setOrderDoc } = useContext(CartContext);

    //custom Hook
    const { form, handleInputChange } = useForm();

    const navigate = useNavigate();

    function nextButton() {
        if (!form.creditCardNumber || !form.creditCardMonthExpired || !form.creditCardYearExpired || !form.creditCardCVV || !form.creditCardHolderName) {
            return (<button disabled className="btn btn-success btn-block">FINALIZAR COMPRA</button>);
        } else {
            return (<button className="btn btn-success btn-block" onClick={() => { clear(); localStorage.removeItem('actualOrder'); setOrderDoc(orderId); navigate(`/productBuyed`); }}>FINALIZAR COMPRA</button>);
        }
    }

    return (
        <div className="formWidth m-auto">
            <div><h5>-------------- 1 -------------- ►2◄ --------------</h5></div>
            <h2>Datos de pago</h2>
            <form action="#" className="credit-card-div formWidth m-auto">
                <div className="panel panel-default" >
                    <div className="panel-heading">

                        <div className="row ">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Número de la Tarjeta" name="creditCardNumber" value={form.creditCardNumber} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" > Mes de Vencimiento</span>
                                <input type="text" className="form-control" placeholder="MM" name="creditCardMonthExpired" value={form.creditCardMonthExpired} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" >  Año de Vencimiento</span>
                                <input type="text" className="form-control" placeholder="AA" name="creditCardYearExpired" value={form.creditCardYearExpired} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" >  CVV</span>
                                <input type="text" className="form-control" placeholder="CVV" name="creditCardCVV" value={form.creditCardCVV} onChange={handleInputChange} />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3 text-start">
                                <img src={CCImage} className="img-rounded mt-3 p-0" width={60} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-12 pad-adjust">

                                <input type="text" className="form-control" placeholder="Nombre del Titular de la Tarjeta" name="creditCardHolderName" value={form.creditCardHolderName} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                <button className="btn btn-dark" onClick={() => navigate(`/cartStep1`)}>ATRÁS</button>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                <button className="btn btn-danger" onClick={() => {localStorage.removeItem('actualOrder'); deleteOrderCart(orderId); setOrderId(''); navigate(`/cart`);}}>CANCELAR ORDEN</button>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                {nextButton()}
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CartPayForm