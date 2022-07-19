import React from 'react';
import Category from './Category';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
        <div className="container-fluid bg-warning">
          <h2 className='titlePages'>TIENDA</h2>
          <div className='row justify-content-center m-auto'>
          <Category />
          <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Shop