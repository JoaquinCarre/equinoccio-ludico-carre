import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import logo1 from '../images/cajaRobomeke.png'
import logo2 from '../images/cajaPancú.png'
import logo3 from '../images/cajaRoliwar.png'
import logo4 from '../images/cajaEdificiosLocos.png'

const Item = ({ id, title, pos, genre, minPlayers, maxPlayers, time, age, price}) => {
  const listLogos = [logo1, logo2, logo3, logo4]
  return (
    <>
      <div key={id} className='col bg-light rounded m-3 card'>
        <h2 className='card-title'>{title}</h2>
        <Link to={`/item/${pos}`}
          key={id}
          ><img width={150} src={listLogos[pos-1]} alt={id} className='card-img-top'/></Link>
        <div className='card-text list-group list-group-flush text-start'>
        <p className='list-group-item m-0'><strong>Género: </strong>{genre}</p>
        <p className='list-group-item m-0'><strong>N° Jugadores: </strong>{minPlayers} a {maxPlayers}</p> 
        <p className='list-group-item m-0'><strong>Tiempo Aproximado: </strong>{time}</p>
        <p className='list-group-item m-0'><strong>Edad: </strong>{age} años</p>
        </div>
        <h3>${price}</h3>
        <ItemCount stock={5} initial={1} onAdd={(n)=>alert('Agregadas ' + n + ' unidades')}/>
      </div>
    </>
  )
}

export default Item