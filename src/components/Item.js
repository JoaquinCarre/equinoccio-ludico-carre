import React from 'react'
import ItemCount from './ItemCount';
import logo1 from '../images/cajaRobomeke.png'
import logo2 from '../images/cajaPancú.png'
import logo3 from '../images/cajaRoliwar.png'
import logo4 from '../images/cajaEdificiosLocos.png'

const Item = ({ id, title, pos, genre, minPlayers, maxPlayers, time, age, price}) => {
  const listLogos = [logo1, logo2, logo3, logo4]
  return (
    <div key={id} className='col bg-light rounded m-3'>
      <h2>{title}</h2>
      <img width={150} src={listLogos[pos-1]} alt={id} />
      <p><strong>Género: </strong>{genre}</p>
      <p><strong>N° Jugadores: </strong>{minPlayers} a {maxPlayers}</p> 
      <p><strong>Tiempo Aproximado: </strong>{time}</p>
      <p><strong>Edad: </strong>{age} años</p>
      <h3>${price}</h3>
      <ItemCount stock={5} initial={1} onAdd={(n)=>alert('Agregadas ' + n + ' unidades')}/>
    </div>
  )
}

export default Item