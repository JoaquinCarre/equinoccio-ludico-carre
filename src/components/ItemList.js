import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {
  return (
    <div className='row'>
      {item.map (({ id , title, pos , description, price})=>(
        <Item id={id} 
        title={title}
        pos = {pos}
        description={description}
        price={price}/>
      ))}
    </div>
  );
};

export default ItemList