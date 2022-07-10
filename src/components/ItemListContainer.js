import React, {useState} from 'react';
import ItemList from './ItemList';
import boardGames from '../boardGames.json'

const ItemListContainer = ({greeting}) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const item = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(boardGames);}, 2000);
  });
  item.then ((resp)=>{
    setList(resp);
    setIsLoading(false);
  })
  
  return (
    <div>{ isLoading ? 
      <div>
        <div>{greeting}</div>
        <div className="container-fluid bg-warning">
          <h2 className='fs-1'>TIENDA</h2>
          <span className='d-block'>CARGANDO...</span>
          <img width={200} src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" alt="loading Icon" />
        </div>
      </div>
    :
      <div>
        <div>{greeting}</div>
        <div className="container-fluid bg-warning">
          <h2 className='fs-1'>TIENDA</h2>
          <ItemList item={list} />
        </div>
      </div>
    }
    </div>
  )
}

export default ItemListContainer