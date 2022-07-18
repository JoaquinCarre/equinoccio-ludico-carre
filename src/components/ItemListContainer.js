import React, {useState} from 'react';
import ItemList from './ItemList';
import boardGames from '../boardGames.json';

const ItemListContainer = () => {
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
    <div className='col text-center'>
      { isLoading ? 
      <>
          <span className='d-block'>CARGANDO...</span>
          <img width={200} src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" alt="loading Icon" />
      </>
    :
      <>
          <ItemList item={list} />
      </>
    }
    </div>
  )
}

export default ItemListContainer