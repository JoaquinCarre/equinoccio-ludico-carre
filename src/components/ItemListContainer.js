import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
/* import boardGames from '../boardGames.json'; */
import db from '../firebase.js'
import { query, where, limit, getDocs, collection, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //obtengo de la base de datos importada del firebase.js
  const getItems = async () => {
    const queryItems = await getDocs(collection(db, "items"));
    const itemsList = queryItems.then((snapshot) => {
      //seteo lo que me devuelve el mapeo del resultado del snapshot 
      setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() })));
    });
  };

  let params = useParams();

  //veo si coinciden los géneros de los juegos de mesa con el seleccionado por categoría
  if (params.genre === "Estrategia" || params.genre === "Filler" || params.genre === "Familiar" || params.genre === "Roll & Write") {
    //hago uso del query para filtrar la coleccion para aquellos juegos que coincidan con el género arrojado desde el parámetro params y que se muestre solo un item con limit
    const q = query(getItems(), where("categoryGenreId", "==", params.genre), limit(1));
    getDocs(q).then((snapshot) => {
      //seteo el producto filtrado para que luego se resuelva la promesa con el item filtrado
      setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() })));
    });
    //si el parámetro no contiene ningún objeto o dato directamente carga el array completo obtenido de la base de datos
  } else {
    getItems();
  }

  // resuelvo la promesa con lo que fue seteado de productos
  const item = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(products); }, 0);
  });
  item.then((resp) => {
    setList(resp);
    setIsLoading(false);
  })

  //renderizo el listado de items completo o filtrado
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
            <ItemList item={list} />
          </>
        }
      </div>
    </>
  )
}

export default ItemListContainer