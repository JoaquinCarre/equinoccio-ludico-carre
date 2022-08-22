import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import CartContext from "../context/CartContext";
import { useForm } from "../hooks/useForm";


const CartForm = () => {
    const { sendOrder } = useContext(CartContext);

    //custom Hook
    const { form, handleInputChange } = useForm();

    const navigate = useNavigate();

    function nextButton() {
        if (!form.name || !form.email || !form.phone || !form.street1 || !form.city || !form.state || !form.zipcode) {
            return (<button disabled className="btn btn-primary">SIGUIENTE</button>);
        } else {
            return (<button className="btn btn-primary" onClick={() => { sendOrder(form.name, form.phone, form.email, form.street1, form.street2, form.city, form.state, form.zipcode); navigate(`/cartStep2`); }}>SIGUIENTE</button>);
        }
    }

    return (
        <div className="formWidth m-auto">
            <div><h5>-------------- ►1◄ -------------- 2 --------------</h5></div>
            <h2>Datos del comprador</h2>
            <form>
                <div className="form-group">
                    <label for="full_name_id" className="control-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="full_name_id" value={form.name} name="name" placeholder="Nombres y Apellido" onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="email_id" className="control-label">E-mail</label>
                    <input type="email" className="form-control" id="email_id" value={form.email} name="email" placeholder="e-mail@ejemplo.com" onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="phone_id" className="control-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone_id" value={form.phone} name="phone" placeholder="123-1234567" onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="street1_id" className="control-label">Dirección de calle</label>
                    <input type="text" className="form-control" id="street1_id" name="street1" placeholder="Calle 123" value={form.street1} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="street2_id" className="control-label">Otra dirección de calle</label>
                    <input type="text" className="form-control" id="street2_id" name="street2" placeholder="Calle Alternativa 123" value={form.street2} onChange={handleInputChange}></input>
                </div>

                <div className="form-group">
                    <label for="city_id" className="control-label">Ciudad</label>
                    <input type="text" className="form-control" id="city_id" name="city" placeholder="Nombre de la ciudad" value={form.city} onChange={handleInputChange}></input>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label for="state_id" className="control-label">Provincia</label>
                        <input type="text" className="form-control" id="state_id" name="state" placeholder="Nombre de la provincia" value={form.state} onChange={handleInputChange}></input>
                    </div>

                    <div className="form-group mb-2 col">
                        <label for="zip_id" className="control-label">Código Postal</label>
                        <input type="number" className="form-control" id="zip_id" name="zipcode" placeholder="#####" value={form.zipcode} onChange={handleInputChange}></input>
                    </div>
                </div>

                <div className="form-group text-center">
                    <button className="btn btn-dark mx-2" onClick={() => navigate(`/cart`)}>VOLVER AL CARRITO</button>
                    {nextButton()}
                </div>

            </form>
        </div>

    )

};

export default CartForm;