import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [buy, setBuy] = useState (false);
    const [count, setCount] = useState (initial);
    const incrementar = () => {
        setCount (count + 1);
    };
    const decrementar = () => {
        setCount (ValAnt => ValAnt > initial ? count - 1 : count);
    };

    if (buy === false) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={decrementar}>-</button>
                    <h4 className="px-3">{count}</h4>
                    <button className="btn btn-success" onClick={incrementar}>+</button>
                </div>
                <div>
                    {count <= stock ?
                    <button className="btn btn-light btn-outline-dark m-3" onClick={() => {onAdd (count); setBuy(true)}}>Agregar al Carrito</button>
                    :
                    <button className="btn btn-light btn-outline-dark m-3 disabled">Agregar al Carrito</button>}
                </div>
                {count <= stock ? <p>Productos disponibles: {stock} unidades</p> : <p className="text-danger">¡No hay más que {stock} unidades disponibles!</p>}
            </div>
        )
    } else {
        return (<><div className="d-flex justify-content-center">
            <img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" width={50} alt="checked icon" />
            <p className="fs-2">Agregaste {count} unidades</p>
            </div>
            <div>
            <Link to="/tienda" ><button className="btn btn-primary opacity-75">Continuar Comprando...</button></Link> <Link to="/cart" ><button className="btn btn-success">Finalizar Compra</button></Link>
            </div>
            </>)
    }
    
}

export default ItemCount;