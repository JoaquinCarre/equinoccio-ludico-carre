import React, { useState, useEffect } from 'react';
import boardGames from '../boardGames.json';
import ItemDetail from './ItemDetail';
import { useParams, Outlet } from 'react-router-dom';
import Category from './Category';
import db from '../firebase.js'
import { getDoc, doc } from 'firebase/firestore'


const getItemById = async (itemId) => {
  return (await getDoc(doc(db, "items", itemId))).data();
}


const ItemDetailContainer = () => {
  let { doc } = useParams();

  const [isLoadingDet, setIsLoadingDet] = useState(true);
  const [itemDet, setItemDet] = useState([]);

  useEffect(() => {
    getItemById(doc).then((respo) => {
      setItemDet(respo);
      setIsLoadingDet(false);
    });
  }, [doc]);

  return (
    <div className="container-fluid bg-warning">
      <h2 className='titlePages'>TIENDA</h2>
      <div className='row justify-content-center m-auto'>
        <Category />
        <div className='col bg-warning'>{isLoadingDet ?
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