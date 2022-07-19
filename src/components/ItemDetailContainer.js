/* import React from 'react';

const ItemDetailContainer = () => {
  console.log('jaja')
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer */

import React, {useState, useEffect} from 'react';
import boardGames from '../boardGames.json';
import ItemDetail from './ItemDetail';
import { useParams, Outlet } from 'react-router-dom';
import Category from './Category';

const getItem = () => {
  
  const itemDetailed = new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(boardGames);}, 2000);
  });

  return itemDetailed;
}

const ItemDetailContainer = () => {
  let params = useParams ();
  console.log (params);

  const [isLoadingDet, setIsLoadingDet] = useState(true);
  const [itemDet, setItemDet] = useState ([]);
  
  useEffect (() => {
  getItem().then((respo)=>{
    console.log(respo);
    setItemDet (respo[params.pos-1]);
    setIsLoadingDet(false);
  });
}, []);
  
  return (
    <div className="container-fluid bg-warning">
      <h2 className='titlePages'>TIENDA</h2>
      <div className='row justify-content-center m-auto'>
        <Category />
        <div className='col bg-warning'>{ isLoadingDet ? 
            <div>
                <h2 className='fs-1'>Detalle del Producto</h2>
                <span className='d-block'>CARGANDO...</span>
                <img width={200} src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" alt="loading Icon" />
            </div>
            :
            <div>
                <h2 className='fs-1'>Detalle del Producto</h2>
                <div className="container-fluid bg-warning p-0">
                <ItemDetail item={itemDet} />
                </div>
            </div>
        }
        </div>
        <Outlet />
      </div>
    </div>
  )
} 

export default ItemDetailContainer

/* import React, {useState, useEffect} from 'react';
import boardGames from '../boardGames.json';
import ItemDetail from './ItemDetail';
import { useParams, Outlet } from 'react-router-dom';

const ItemDetailContainer = () => {
  let params = useParams ();
  console.log (params);

  const [isLoadingDet, setIsLoadingDet] = useState(true);
  const [itemDet, setItemDet] = useState ([]);
  
  useEffect (() => {
    const itemDetailed = new Promise((resolve, reject) => {
      setTimeout(()=>{resolve(boardGames[params.pos-1]);}, 2000);
    });
    itemDetailed.then((respo)=>{
    console.log(respo);
    setItemDet (respo);
    setIsLoadingDet(false);
  });
}, []);
  
  return (
    <>
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
    <Outlet />
    </>
  )
} 

export default ItemDetailContainer */

