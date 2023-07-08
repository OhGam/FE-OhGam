// import React from "react";
import { useNavigate } from "react-router-dom";
// import Login from "./LogIn";
import Button from "../components/Button";

export default function Main() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleCommunityClick = () => {
    navigate("/community");
  };

  return (
    <div className="h-full pl-10 pr-10 pt-32">
      <div className="flex flex-col">
        <h1 className="pb-2 text-2xl font-[1000]">오감</h1>
        <p className="text-sm">오감으로 느낀 오늘의 감사</p>
      </div>
      <div className="mb-40 pt-20 text-sm/7 font-black">
        <p>감사한 일들을 생각하면서</p>
        <p>하루를 마무리 해보자</p>
      </div>
      <div>
        <Button text="로그인" onClick={handleLoginClick} />
        <Button text="구경하기" onClick={handleCommunityClick} />
      </div>
    </div>
  );
}
