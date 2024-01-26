import React, { useState } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import Check from '../assets/icon/check.svg';

export default function Login() { // 로그인 페이지
  const [hasLogin, setHasLogin] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
    setHasLogin(true);
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <div className="mt-14 w-full max-w-4xl px-4 border-b-2 border-mustardYellow"></div>
      {hasLogin ? (
        <div className="MCompletion">
          <img src={Check} alt="Check" className="mt-10" />
          <strong className="mt-3">로그인 완료</strong>
        </div>
      ) : (
        <div className="w-full max-w-4xl mt-10 mb-10 p-8 border border-mustardGray rounded shadow-lg bg-white">
          <h1 className="text-3xl font-bold mb-6 text-center">로그인</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg font-semibold text-gray-700">ID :</label>
              <input type="text" id="username" name="username"
                className="mt-1 w-full border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:border-mustardYellow focus:ring focus:ring-mustardYellow focus:ring-opacity-50"
                style={{ padding: '12px 16px' }} // Increased padding for larger touch area
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">PW :</label>
              <input type="password" id="password" name="password"
                className="mt-1 w-full border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:border-mustardYellow focus:ring focus:ring-mustardYellow focus:ring-opacity-50"
                style={{ padding: '12px 16px' }} // Increased padding for larger touch area
              />
            </div>
            <div className='flex justify-between mt-4'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="saveId" className="rounded text-mustardYellow focus:ring-mustardYellow" />
                <label htmlFor="saveId" className="text-sm font-medium text-gray-700">아이디 저장</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="autoLogin" className="rounded text-mustardYellow focus:ring-mustardYellow" />
                <label htmlFor="autoLogin" className="text-sm font-medium text-gray-700">자동로그인</label>
              </div>
            </div>
            <button type="submit"
                    className="mt-6 w-full bg-TGreen hover:bg-mustardYellow text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustardYellow focus:ring-opacity-50"
            >
              로그인
            </button>
          </form>
          <div className="flex justify-between items-center mt-6 text-sm font-medium">
            <Link to='/SignUp' className="text-mustardYellow hover:underline">회원가입</Link>
            <Link to='/Find' className="text-mustardYellow hover:underline">아이디 | 비밀번호 찾기</Link>
          </div>
        </div>
      )}
    </div>
  );
}