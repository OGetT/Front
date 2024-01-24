import React, { useState } from "react";
import Header from "../components/header";
import "../css/bootstrap.css";
import "../css/st.css";
import "../css/style.css";
import Check from '../assets/icon/check.svg';

export default function Signup() { // 회원가입 페이지
  const [hasSignup, setHasSignup] = useState(false);
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <Header />
      {hasSignup ? (
        <div className="MCompletion">
          <div className="separator"></div>
          <li
            className="MC"
            style={{ marginLeft: '23px' }}
          >
            <img src={Check} alt="Check" />
          </li>
          <strong>회원가입 완료</strong>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center w-2/4">
            <div className="container mx-auto mt-28 mb-28 p-5 border border-mustardGray rounded shadow-lg bg-white">
              <h1 className="text-2xl font-bold mb-5">회원가입</h1>
              <form id="product-form" className="space-y-4 flex flex-col w-4/5 mx-auto mt-8 mb-10">
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">ID 입력 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">비밀번호 입력 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">비밀번호 확인 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">이메일 :</label>
                  <div className='flex'>
                    <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                    <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold text-sm whitespace-nowrap ml-3" style={{ color: 'white' }}>인증번호 받기</button>
                  </div>
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">인증번호 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5 mb-10" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">이름 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">생년월일 ( 6자리 ) :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">성별 :</label>
                <form>
                  <label>
                    <input type="radio" name="gender" value="MALE" />
                    남자
                  </label>

                  <label>
                    <input type="radio" name="gender" value="FEMALE" />
                    여자
                  </label>
                </form>
                <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">전화번호 :</label>
                <div className='flex'>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                  <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold text-sm whitespace-nowrap ml-3" style={{ color: 'white' }}>인증번호 받기</button>
                </div>
                <div>
                  <label htmlFor="product-name" className="block mb-2 text-sm font-bold text-gray-700">전화번호 확인 :</label>
                  <input type="text" id="product-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5 mb-10" />
                </div>
                <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg sm:w-auto px-5 py-2.5 text-center font-bold w-full" style={{ color: 'white' }}>회원가입</button>
              </form>
            </div >
          </div >
        </>
      )
      }
    </div >
  );
}
