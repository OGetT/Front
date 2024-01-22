import React from "react";

import Header from "../components/header";
import Card from "../components/card";

export default function Ai() { // ai 추천 페이지
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Header />

      <Card />
    </div>
  );
}