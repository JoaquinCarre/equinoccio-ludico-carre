import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../firebase.js'

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { genre } = useParams();

  //obtengo la base de datos importada del firebase.js
  useEffect(() => {
    setIsLoading(true);
    getProducts(genre)
      .then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() }))) })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err.message));
  }, [genre]);

  //render del listado de items completo o filtrado
  return (
    <>
      <div className='col text-center'>
        {isLoading ?
          <>
            <span className='d-block'>CARGANDO...</span>
            <img width={200} src="https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" alt="loading Icon" />
          </>
          :
          <>
            <ItemList item={products} />
          </>
        }
      </div>
    </>
  )
}

export default ItemListContainer