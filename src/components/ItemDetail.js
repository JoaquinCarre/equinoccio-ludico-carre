import React from 'react';
import { useState, useContext, useEffect } from "react";
import ItemCount from './ItemCount';
import logo1 from '../images/cajaRobomeke.png';
import logo2 from '../images/cajaPancú.png';
import logo3 from '../images/cajaRoliwar.png';
import logo4 from '../images/cajaEdificiosLocos.png';
import CartContext from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [unitsChoosed, setUnitsChoosed] = useState();
  const listLogos = [logo1, logo2, logo3, logo4];
  const { addItem, stockRobomekeFree, stockPancuFree, stockRoliwarFree, stockEdificiosLocosFree, itemStock } = useContext(CartContext);

  useEffect(()=>{
    itemStock(item.stock, unitsChoosed, item.title);
  },[unitsChoosed]);

  return (
    <div key={item.title} className='col rounded m-3'>
      <h2 className='p-2 mb-2 bg-danger opacity-75 text-white rounded'>{item.title}</h2>
      <img width={250} src={listLogos[item.pos - 1]} alt={item.title} className='img-fluid' />
      <p className='lead'>{item.description}</p>
      <div className='text-start d-flex flex-wrap justify-content-between'>
        <p className='m-2'><strong>- Género: </strong>{item.categoryGenreId}</p>
        <p className='m-2'><strong>- N° Jugadores: </strong>{item.minPlayers} a {item.maxPlayers}</p>
        <p className='m-2'><strong>- Tiempo Aproximado: </strong>{item.duration}</p>
        <p className='m-2'><strong>- Edad: </strong>{item.age} años</p>
      </div>
      <h3 className='m-4'>Precio Actual por Unidad: ${item.price}</h3>
      {item.title === 'Robomeke' ? <ItemCount stock={stockRobomekeFree} initial={1} onAdd={(n) => { setUnitsChoosed(n); addItem({ ...item, quantity: n }) }} /> : <></> }
      {item.title === 'Pancú' ? <ItemCount stock={stockPancuFree} initial={1} onAdd={(n) => { setUnitsChoosed(n); addItem({ ...item, quantity: n }) }} /> : <></> }
      {item.title === 'Roliwar' ? <ItemCount stock={stockRoliwarFree} initial={1} onAdd={(n) => { setUnitsChoosed(n); addItem({ ...item, quantity: n }) }} /> : <></> }
      {item.title === 'Edificios Locos' ? <ItemCount stock={stockEdificiosLocosFree} initial={1} onAdd={(n) => { setUnitsChoosed(n); addItem({ ...item, quantity: n }) }} /> : <></> }
    </div>

  )
}

export default ItemDetail