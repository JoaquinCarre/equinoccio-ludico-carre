import React from 'react'
import logo from '../miniEquinoccioLudicoLogo.png';


const WelcomeHome = () => {
  return (
    <div className='text-center container'>
      <img src={logo} alt="Logo Equinoccio Ludico"></img>
      <h1 className="fs-1 fw-bold">Bienvenido/as a la Web de la Editorial Equinoccio Ludico</h1>
      <p className="fw-bold">Incentivados por hacer algo distinto en plena pandemia de Covid-19, un 21 de Septiembre de 2019, decidimos pasar de jugar juegos de mesa a crearlos. Y desde entonces comenzamos nuestro recorrido de aprendizaje, diversión, creación y esfuerzo para lograr crear piezas de arte que disfrutase cada jugón de tener en su ludoteca.</p>
      <p className="fw-bold">El proceso es largo y aún estamos perfeccionando todos esos prototipos que esperan ser editados algún día. Mientras tanto creamos esta web para que puedan conocernos y estar al tanto de todas las novedades de la editorial.</p>
      <p className="fw-bold">Esperamos que llegado el día nos acompañen a disfrutar de estos juegos desplegados en sus mesas. Estamos convencidos que 2022 será nuestro año, pero debemos seguir trabajando en ello.</p>
      <p className="fw-bold">¡Gracias!</p>
    </div>
  )
}

export default WelcomeHome