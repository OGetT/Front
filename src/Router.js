import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Cart from './pages/Cart';
import Find from './pages/Find';
import ProductRegistration from './pages/ProductRegistration';
import Ai from './pages/Ai';
import MyPage from './pages/MyPage';
import WishList from './pages/WishList';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Find' element={<Find />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Ai' element={<Ai />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/WishList' element={<WishList />} />
        <Route path="/product-registration" element={<ProductRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
