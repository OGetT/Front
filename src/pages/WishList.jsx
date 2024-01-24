import React, { useState, useEffect } from 'react';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // 위시리스트 아이템을 불러오는 로직 (예: API 호출)
  }, []);

  return (
    <div className="container mx-auto mt-10 p-5 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-5">내 위시리스트</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <span>{item.name} - {item.price}</span>
            {/* 상품 페이지 링크 및 위시리스트에서 제거 버튼 추가 예정 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
