import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import db, { getProducts, getAllProducts } from '../firebase.js'
import { query, where, limit, getDocs, collection } from 'firebase/firestore'

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //obtengo de la base de datos importada del firebase.js
  useEffect(() => {
    const getItems = async () => {
      await getAllProducts().then((snapshot) => {
        snapshot.docs.map((doc) => {
          setIsLoading(true);
          setProducts({ doc: doc.id, ...doc.data() });
          if (products != []) {
            const itemPromise = new Promise((resolve, reject) => {
              setTimeout(() => { resolve(products); }, 1000);
            });
            console.log (itemPromise);
            itemPromise.then((resp) => {
              console.log (resp);
              setList(resp);
              setIsLoading(false);
            });
          }

        })
      });
    };

  }, []);

  console.log(products);

  const { genre } = useParams();

  //veo si coinciden los géneros de los juegos de mesa con el seleccionado por categoría
  useEffect(() => {
    setIsLoading(true);
    getProducts(genre).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ doc: doc.id, ...doc.data() }))) });
    const item = new Promise((resolve, reject) => {
      setTimeout(() => { resolve(products); }, 1000);
    });
    item.then((resp) => {
      setList(resp);
      setIsLoading(false);
    });
  }, [genre]);


  // resuelvo la promesa con lo que fue seteado de productos


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