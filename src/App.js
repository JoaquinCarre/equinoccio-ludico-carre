import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import ItemListContainer from './components/ItemListContainer';
import WelcomeHome from './components/WelcomeHome';
import ItemDetailContainer from './components/ItemDetailContainer';
import GenreCategory from './components/GenreCategory';

function App () {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Home />)} >
          <Route index element={(<WelcomeHome />)} />
          <Route path="tienda" element={(<Shop />)} >
            <Route index element={(<ItemListContainer />)} />
            <Route path="categoria/:genre" element={(<GenreCategory />)} />
          </Route>
          <Route path="item/:pos" element={(<ItemDetailContainer />)} />
          <Route path="*" element={(<WelcomeHome />)} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;