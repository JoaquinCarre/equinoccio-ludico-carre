import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../images/cajaRobomeke.png'
import logo2 from '../images/cajaPancú.png'
import logo3 from '../images/cajaRoliwar.png'
import logo4 from '../images/cajaEdificiosLocos.png'

const Item = ({ id, title, pos, doc, genre, minPlayers, maxPlayers, time, age, price}) => {
  const listLogos = [logo1, logo2, logo3, logo4]
  return (
    <>
      <div key={id} className='col bg-light rounded m-3 card'>
        <Link to={`/item/${doc}`}
          key={id}
          ><img width={150} src={listLogos[pos-1]} alt={id} className='card-img-top bg-primary'/></Link>
        <h2 className='card-title bg-danger opacity-75 text-white m-0'>{title}</h2>
        <div className='card-text list-group list-group-flush text-start'>
        <p className='list-group-item m-0'><strong>Género: </strong>{genre}</p>
        <p className='list-group-item m-0'><strong>N° Jugadores: </strong>{minPlayers} a {maxPlayers}</p> 
        <p className='list-group-item m-0'><strong>Tiempo Aproximado: </strong>{time}</p>
        <p className='list-group-item m-0'><strong>Edad: </strong>{age} años</p>
        </div>
        <div className='d-flex justify-content-center bg-info p-2'>
          <div className='flex-grow-1'>
            <h3>${price}</h3>
          </div>
          <div className='justify-content-end'>
          <Link to={`/item/${doc}`}
          key={id}
          ><button className='btn btn-primary'>Comprar</button></Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Item