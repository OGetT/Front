import React, { useState } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

export default function Login() { // 로그인 페이지
  const [hasLogin, setHasLogin] = useState(false);
  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      {hasLogin ? (
        <div className="MCompletion">
          <div className="separator"></div>
          <li
            className="MC"
            onclick="window.location.href='Wishlist.html'"
            style={{ marginLeft: '23px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#305440"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              >
                <circle cx="12" cy="12" r="9"></circle>
                <path d="m15 10l-4 4l-2-2"></path>
              </g>
            </svg>
          </li>
          <strong>로그인 완료</strong>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center pt-14">
            <div className="flex flex-col w-1/2 container mx-auto mt-28 mb-28 p-5 border border-mustardGray rounded shadow-lg bg-white">
              <h1 className="text-2xl font-bold mb-5">로그인</h1>
              <form id="product-form" className="space-y-4 flex flex-col w-3/4 mx-auto mt-8 mb-10">
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">ID :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">PW :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                  <div className="MS"></div>
                </div>
                <div className='flex mx-auto gap-52 pt-10'>
                  <div className='flex mx-auto gap-1'>
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox">아이디 저장</label>
                  </div>
                  <div className='flex mx-auto gap-1'>
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox">자동로그인</label>
                  </div>
                </div>
                <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold" style={{ color: 'white' }}>로그인</button>
              </form>
              <div className="mt-3 mx-auto flex justify-center gap-96 text-sm mr-4 ml-4">
                <Link to='/Signup'>
                  <a>회원가입</a>
                </Link>
                <Link to='/Find'>
                  <a>아이디 | 비밀번호 찾기</a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div >
  );
}