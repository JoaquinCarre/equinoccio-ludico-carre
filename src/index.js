import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import logo from './miniEquinoccioLudicoLogo.png';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='text-center'>
      <Navbar />
    </div>
    <div className='text-center container'>
      <img src={logo}></img>
      <h1 className="fs-1 fw-bold">Editorial Equinoccio Ludico</h1>
      <p className="fw-bold">Incentivados por hacer algo distinto en plena pandemia de Covid-19, un 21 de Septiembre de 2019, decidimos pasar de jugar juegos de mesa a crearlos. Y desde entonces comenzamos nuestro recorrido de aprendizaje, diversión, creación y esfuerzo para lograr crear piezas de arte que disfrutase cada jugón de tener en su ludoteca.</p>
      <p className="fw-bold">El proceso es largo y aún estamos perfeccionando todos esos prototipos que esperan ser editados algún día. Mientras tanto creamos esta web para que puedan conocernos y estar al tanto de todas las novedades de la editorial.</p>
      <p className="fw-bold">Esperamos que llegado el día nos acompañen a disfrutar de estos juegos desplegados en sus mesas. Estamos convencidos que 2022 será nuestro año, pero debemos seguir trabajando en ello.</p>
      <p className="fw-bold">¡Gracias!</p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
