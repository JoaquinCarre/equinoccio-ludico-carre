import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './components/Shop';
import ItemListContainer from './components/ItemListContainer';
import WelcomeHome from './components/WelcomeHome';
import Category from "./components/Category";
import ItemDetailContainer from './components/ItemDetailContainer';
import GenreCategory from './components/GenreCategory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<App />)} >
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
