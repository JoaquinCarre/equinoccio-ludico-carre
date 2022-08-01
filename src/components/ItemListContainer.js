import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import boardGames from '../boardGames.json';
import db from '../firebase.js'
import { query, where, limit, getDocs, collection } from 'firebase/firestore'

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //obtengo de la base de datos importada del firebase.js
  useEffect(() => {
    const getItems = async () => {
      const queryItems = await getDocs(collection(db, "items"));
      const itemsList = queryItems.docs.map((doc) => {setIsLoading(true); setProducts({ doc: doc.id, ...doc.data() })});
    };
  }, []);

  console.log(products);

  let { genre } = useParams();

  //veo si coinciden los géneros de los juegos de mesa con el seleccionado por categoría
  useEffect(() => {
    setIsLoading(true); 
    if (genre) {
      const filterItems = async (categoryGenre) => {
        const q = query(collection(db, "items"), where("categoryGenreId", "==", categoryGenre), limit(1));
        const queryItemDetail = await getDocs(q).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() }))) })
        console.log(queryItemDetail);
      };
      filterItems(genre);
    } else {
      const noFilterItems = async () => {
        const queryItemList = await getDocs(collection(db, "items")).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() }))) })
        console.log(queryItemList);
      };
      noFilterItems();
    };
  }, [genre]);


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