import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function ProductRegistration() { // 상품 등록 페이지
  const [productDetails, setProductDetails] = useState({
    productID: '',
    name: '',
    price: '',
    category: '',
    description: '',
    author: '',
  });
  const [previewImage, setPreviewImage] = useState(null); // 이미지 미리보기 상태 추가
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Purchase?product=${productDetails.productID}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleImageChange = (e) => { // 이미지 변경 핸들러
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-28 mb-28 p-5 border border-mustardGray rounded shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-5">상품 등록</h1>
        <form id="product-form" onSubmit={handleSubmit} className="space-y-4 flex flex-col w-4/5 mx-auto mt-8 mb-10">
          <div>
            <label htmlFor="product-image" className="block mb-2 text-sm font-bold text-gray-700">사진:</label>
            <input type="file" id="product-image" name="image" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-mustardYellow file:text-TGreen hover:file:bg-mustardGray" />
            {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-40 h-40 object-cover" />} {/* 이미지 미리보기 */}
          </div>

          <div>
            <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">이름:</label>
            <input type="text" id="product-name" name="name" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
          </div>

          <div>
            <label htmlFor="product-price" className="block mb-2 text-sm font-bold text-gray-700 mt-2">가격:</label>
            <input type="number" id="product-price" name="price" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
          </div>

          <div>
            <label htmlFor="product-category" className="block mb-2 mt-2 text-sm font-bold text-gray-700">옷 종류:</label>
            <input type="text" id="product-category" name="category" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
          </div>

          <div>
            <label htmlFor="product-description" className="block mb-2 mt-2 text-sm font-bold text-gray-700">상품 내용:</label>
            <textarea id="product-description" name="description" onChange={handleInputChange} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5"></textarea>
          </div>

          <div>
            <label htmlFor="product-author" className="block mb-2 mt-2 text-sm font-bold text-gray-700">작성자:</label>
            <input type="text" id="product-author" name="author" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5 mb-10" />
          </div>

          <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow font-bold rounded-lg w-full sm:w-auto px-5 py-2.5 text-center" style={{ color: 'white' }}>등록</button>
        </form>
      </div>
    </div>
  );
}