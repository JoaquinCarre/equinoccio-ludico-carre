import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <div>{greeting}</div>
      <ItemCount stock={5} initial={1} onAdd={(n)=>alert('Agregadas ' + n + ' unidades')}/>
    </div>
  )
}

export default ItemListContainer