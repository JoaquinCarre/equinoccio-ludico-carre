import React from 'react';
import { Link } from 'react-router-dom';
import boardGames from '../boardGames.json';

const Category = () => {
  return (
    <div className='col-md-3 row'>
      <div className='bg-warning list-group col p-0'>
        <h6 className='text-md-start'>Categorías por Género:</h6>
        {boardGames.map((bGLinks) => (
          <Link className='list-group-item list-group-item-action bg-transparent text-start border-0'
            to={`/tienda/categoria/${bGLinks.genre}`}
            key={bGLinks.id}
          >
            ○ {bGLinks.genre}
          </Link>
        ))}
        <div className='bg-transparent text-start mx-3 mt-1 text-decoration-none'>○ <Link to="/tienda" >(X) Deshacer filtrado</Link></div>
      </div>
    </div>
  )
}

export default Category