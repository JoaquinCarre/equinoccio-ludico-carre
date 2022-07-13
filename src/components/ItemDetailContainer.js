import React, {useState} from 'react';
import boardGames from '../boardGames.json';
import ItemDetail from './ItemDetail';

const getItem = () => {
    
    const itemDetailed = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(boardGames[0]);}, 2000);
    });

    return itemDetailed;
}

const ItemDetailContainer = () => {
  const [isLoadingDet, setIsLoadingDet] = useState(true);
  const [itemDet, setItemDet] = useState ([]);
  
  getItem().then((respo)=>{
    console.log(respo);
    setItemDet (respo);
    setIsLoadingDet(false);
  });
  
  return (
    <div className='col'>{ isLoadingDet ? 
        <div>
            <h2 className='fs-1'>Resumen del Producto</h2>
            <span className='d-block'>CARGANDO...</span>
            <img width={200} src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" alt="loading Icon" />
        </div>
        :
        <div>
            <h2 className='fs-1'>Resumen del Producto</h2>
            <div className="container-fluid bg-warning">
            <ItemDetail item={itemDet} />
        </div>
      </div>
    }
    </div>
  )
}

export default ItemDetailContainer