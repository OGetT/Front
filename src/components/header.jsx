import React from "react";
import { useNavigate } from "react-router-dom";
import MainTitle from "./mainTitle";
import Banner from "./banner";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="relative flex flex-wrap items-center justify-between p-0 flex-col w-full">
      {/* <!-- 로고 클릭시 index로 이동 --> */}
      <MainTitle />

      {/* <!-- 상단 바 --> */}
      <Banner />

      {/* <!-- 카테고리 --> */}

    </nav>
  );
}
