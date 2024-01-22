import React from 'react';
import Header from '../components/header';
import '../css/cart.css';

export default function Cart() { // 장바구니
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Header />

      {/* <div class="cart">
        <div class="separator"></div>
        <h2>장바구니</h2>
      </div> */}
    </div>
  );
}
