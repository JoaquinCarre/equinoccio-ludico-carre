import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {
  return (
    <div className='row col'>
      {item.map (({ id , title, pos , genre, minPlayers, maxPlayers, time, age, price})=>(
        <Item id={id} 
        title={title}
        pos = {pos}
        genre={genre}
        minPlayers={minPlayers}
        maxPlayers={maxPlayers}
        time={time}
        age={age}
        price={price}/>
      ))}
    </div>
  );
};

export default ItemList