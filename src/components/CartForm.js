import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import CartContext from "../context/CartContext";


const CartForm = () => {
    const { sendOrder } = useContext(CartContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street1, setStreet1] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");

    const navigate = useNavigate();

    const nextButton = () => {
        if (!name || !email || !phone) {
            return (<button disabled className="btn btn-primary">Siguiente</button>)
        } else {
            return (<button className="btn btn-primary" onClick={(e) => { e.preventDefault(); sendOrder(name, phone, email); navigate(`/cartStep2`) }}>Siguiente</button>)
        }
    }

    return (
        <div className="formWidth m-auto">
            <div><h5>-------------- ►1◄ -------------- 2 --------------</h5></div>
            <h2>Datos del comprador</h2>
            <form>
                <div className="form-group">
                    <label for="full_name_id" className="control-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="full_name_id" value={name} name="full_name" placeholder="Nombres y Apellido" onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label for="email_id" className="control-label">E-mail</label>
                    <input type="email" className="form-control" id="email_id" value={email} name="email" placeholder="e-mail@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label for="phone_id" className="control-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone_id" value={phone} name="phone" placeholder="123-1234567" onChange={(e) => setPhone(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label for="street1_id" className="control-label">Dirección de calle</label>
                    <input type="text" className="form-control" id="street1_id" name="street1" placeholder="Calle 123"></input>
                </div>

                <div className="form-group">
                    <label for="street2_id" className="control-label">Otra dirección de calle</label>
                    <input type="text" className="form-control" id="street2_id" name="street2" placeholder="Calle Alternativa 123"></input>
                </div>

                <div className="form-group">
                    <label for="city_id" className="control-label">Ciudad</label>
                    <input type="text" className="form-control" id="city_id" name="city" placeholder="Nombre de la ciudad"></input>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label for="state_id" className="control-label">Provincia</label>
                        <select className="form-control" id="state_id">
                            <option value="BA">Buenos Aires</option>
                            <option value="BAC">Ciudad Autónoma de Buenos Aires</option>
                            <option value="CA">Catamarca</option>
                            <option value="CHA">Chaco</option>
                            <option value="CHU">Chubut</option>
                            <option value="COR">Córdoba</option>
                            <option value="CORR">Corrientes</option>
                            <option value="ER">Entre Ríos</option>
                            <option value="FO">Formosa</option>
                            <option value="JU">Jujuy</option>
                            <option value="LP">La Pampa</option>
                            <option value="LR">La Rioja</option>
                            <option value="ME">Mendoza</option>
                            <option value="MI">Misiones</option>
                            <option value="NE">Neuquén</option>
                            <option value="RN">Río Negro</option>
                            <option value="SA">Salta</option>
                            <option value="SJ">San Juan</option>
                            <option value="SL">San Luis</option>
                            <option value="SC">Santa Cruz</option>
                            <option value="SF">Santa Fe</option>
                            <option value="SE">Santiago del Estero</option>
                            <option value="TF">Tierra del Fuego</option>
                            <option value="TU">Tucumán</option>
                        </select>
                    </div>

                    <div className="form-group mb-2 col">
                        <label for="zip_id" className="control-label">Código Postal</label>
                        <input type="number" className="form-control" id="zip_id" name="zip" placeholder="#####"></input>
                    </div>
                </div>

                <div className="form-group">
                    {nextButton()}
                </div>

            </form>
        </div>

    )

};

export default CartForm;