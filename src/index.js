import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GetAllProduct from './pages/products/GetAllProduct';
import DetailProduct from './pages/products/DetailProduct';
import AddProduct from './pages/products/AddProduct';
import EditProduct from './pages/products/EditProduct';
import Contact from './pages/products/Contact'
import About from './pages/products/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/product" element={<GetAllProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/edit/:id' element={<EditProduct />} />
      </Route>
    </Routes>  
  </BrowserRouter>
);
