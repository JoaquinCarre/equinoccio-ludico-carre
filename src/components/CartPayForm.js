import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CCImage from '../images/creditCard.png';
import CartContext from "../context/CartContext";

const CartPayForm = () => {
    const { clear } = useContext(CartContext);

    return (
        <div className="formWidth m-auto">
            <div><h5>-------------- 1 -------------- ►2◄ --------------</h5></div>
            <h2>Datos de pago</h2>
            <form action="#" className="credit-card-div formWidth m-auto">
                <div className="panel panel-default" >
                    <div className="panel-heading">

                        <div className="row ">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Número de la Tarjeta" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" > Mes de Vencimiento</span>
                                <input type="text" className="form-control" placeholder="MM" />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" >  Año de Vencimiento</span>
                                <input type="text" className="form-control" placeholder="AA" />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                                <span className="help-block text-muted small-font" >  CVV</span>
                                <input type="text" className="form-control" placeholder="CVV" />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3 text-start">
                                <img src={CCImage} className="img-rounded mt-3 p-0" width={60} />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-12 pad-adjust">

                                <input type="text" className="form-control" placeholder="Nombre del Titular de la Tarjeta" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                <Link to="/cart"><input type="submit" className="btn btn-danger" value="CANCELAR" /></Link>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                                <Link to="/productBuyed"><input type="submit" className="btn btn-success btn-block" value="FINALIZAR COMPRA" onClick={clear} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CartPayForm