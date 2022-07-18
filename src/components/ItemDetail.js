import React from 'react';
import logo1 from '../images/cajaRobomeke.png'
import logo2 from '../images/cajaPancú.png'
import logo3 from '../images/cajaRoliwar.png'
import logo4 from '../images/cajaEdificiosLocos.png'

const ItemDetail = ({item}) => {
  const listLogos = [logo1, logo2, logo3, logo4]
  return (
    <div key={item.id} className='col rounded m-3'>
      <h2 className='p-2 mb-2 bg-primary rounded'>{item.title} <span className='badge bg-danger fs-6'>Nuevo</span></h2>
      <img width={150} src={listLogos[item.pos-1]} alt={item.id} />
      <p className='lead'>{item.description}</p>
      <h3>Precio Actual: ${item.price}</h3>
    </div>
    
  )
}

export default ItemDetail