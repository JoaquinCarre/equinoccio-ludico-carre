import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {
  return (
    <div className='col row justify-content-center'>
      {item.map (({ id , title, pos , categoryGenreId, minPlayers, maxPlayers, duration, age, price})=>(
        <Item id={id} 
        title={title}
        pos = {pos}
        genre={categoryGenreId}
        minPlayers={minPlayers}
        maxPlayers={maxPlayers}
        time={duration}
        age={age}
        price={price}/>
      ))}
    </div>
  );
};

export default ItemList