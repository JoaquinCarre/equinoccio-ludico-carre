import React from 'react';
import logo1 from '../images/cajaRobomeke.png';

const ItemDetail = ({item}) => {
  return (
    <div key={item.id} className='col rounded m-3'>
      <h2 className='p-2 mb-2 bg-primary rounded'>{item.title} <span className='badge bg-danger fs-6'>Nuevo</span></h2>
      <img width={150} src={logo1} alt={item.id} />
      <p className='lead'>{item.description}</p>
      <h3>Precio Actual: ${item.price}</h3>
    </div>
    
  )
}

export default ItemDetail