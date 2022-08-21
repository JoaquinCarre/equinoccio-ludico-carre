import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import ItemListContainer from './components/ItemListContainer';
import WelcomeHome from './components/WelcomeHome';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CartForm from './components/CartForm';
import CartPayForm from './components/CartPayForm';
import CartBuyed from './components/CartBuyed';
import BoardGamesCatalog from './components/BoardGamesCatalog';
import OrderInfo from './components/OrderInfo';

function App () {
    return (
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Home />)} >
          <Route index element={(<WelcomeHome />)} />
          <Route path="catalogo" element={(<BoardGamesCatalog />)} />
          <Route path="tienda" element={(<Shop />)} >
            <Route index element={(<ItemListContainer />)} />
            <Route path="categoria/:genre" element={(<ItemListContainer />)} />
          </Route>
          <Route path="item/:doc" element={(<ItemDetailContainer />)} />
          <Route path='/order' element={(<OrderInfo />)} />
          <Route path="/cart" element={(<Cart />)} />
          <Route path="/cartStep1" element={(<CartForm />)} />
          <Route path="/cartStep2" element={(<CartPayForm />)} />
          <Route path="/productBuyed" element={(<CartBuyed />)} />
          <Route path="*" element={(<WelcomeHome />)} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    );
}

export default App;