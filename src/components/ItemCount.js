import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial);
    const incrementar = () => {
        setCount (count + 1);
    };
    const decrementar = () => {
        setCount (ValAnt => ValAnt > initial ? count - 1 : count);
    };
    return (
        <div className="container-fluid bg-warning">
            <h1>TIENDA</h1>
            <h3>Producto 1</h3>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger" onClick={decrementar}>-</button>
                <h4 className="px-3">{count}</h4>
                <button className="btn btn-success" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="btn btn-light btn-outline-dark m-3" onClick={() => count <= stock ? onAdd (count) : alert('No hay suficientes productos')}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;