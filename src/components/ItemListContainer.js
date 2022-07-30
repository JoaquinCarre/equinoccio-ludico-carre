import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import boardGames from '../boardGames.json';

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let arrayBoardGames = [];

  let params = useParams();
  console.log("aabajo" + params)
  console.log(params)

  if (params.genre === "Estrategia" || params.genre === "Filler" || params.genre === "Familiar" || params.genre === "Roll & Write") {
    arrayBoardGames = boardGames.filter(el => el.genre === params.genre);
  } else {
    arrayBoardGames = boardGames;
  }

  const item = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(arrayBoardGames); }, 0);
  });
  item.then((resp) => {
    setList(resp);
    setIsLoading(false);
  })

  return (
    <>
      {/*     <Category /> */}
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