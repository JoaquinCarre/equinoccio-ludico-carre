import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import ItemListContainer from './components/ItemListContainer';
import WelcomeHome from './components/WelcomeHome';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

function App () {
    return (
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Home />)} >
          <Route index element={(<WelcomeHome />)} />
          <Route path="tienda" element={(<Shop />)} >
            <Route index element={(<ItemListContainer />)} />
            <Route path="categoria/:genre" element={(<ItemListContainer />)} />
          </Route>
          <Route path="item/:pos" element={(<ItemDetailContainer />)} />
          <Route path="/cart" element={(<Cart />)} />
          <Route path="*" element={(<WelcomeHome />)} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    );
}

export default App;