import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // TODO: 여기에서 장바구니 아이템을 불러옵니다. API 호출 등 백엔드 연동 필요.
  }, []);

  const handleRemoveItem = (itemId) => {
    // TODO: 아이템 삭제 로직 구현. 백엔드 API 연동 필요.
  };

  const handleOrder = () => {
    // TODO: 주문 로직 구현. 백엔드 API 연동 필요.
  };

  return (
    <div className="container mx-auto mt-10 p-5 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-5">장바구니</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-3">
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
            <span>{item.name} - {item.price}원 - {item.description}</span>
            <button onClick={() => handleRemoveItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOrder}>
        주문하기
      </button>
    </div>
  );
}
