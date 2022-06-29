import './Navbar.css';
import logo from '../miniEquinoccioLudicoLogo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={logo} width={30} height={30}></img>
        <p className='m-0 p-2 text-primary d-flex'><div className='fw-bold'>E</div>quinoccio <div className='fw-bold'>L</div>udico</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Juegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Tienda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
