import React from "react";
import Buttons from "./components/Buttons";

export default function Main() {
  return (
    <div>
      <div className="main-title">
        <h1 className="main-title-ohgam">오감</h1>
        <p className="main-title-detail">오감으로 느낀 오늘의 감사</p>
      </div>
      <div className="main-detail">
        <p className="main-detail-first">감사한 일들을 생각하면서</p>
        <p className="main-detail-second">하루를 마무리 해보자</p>
      </div>

      <Buttons />
    </div>
  );
}
