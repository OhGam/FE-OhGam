import React, { useState } from "react";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const buttons = [
    { to: "/Main", text: "로그인" },
    { to: "/SignUp", text: "회원가입" },
  ];

  return (
    <div className="h-full pl-8 pr-8 pt-56">
      <div className="mb-16">
        <Input
          label="아이디"
          inputText={username}
          setInputText={setUsername}
          placeholder="아이디를 입력하세요."
        />
        <Input
          label="비밀번호"
          inputText={password}
          setInputText={setPassword}
          placeholder="비밀번호를 입력하세요."
        />
      </div>
      <div>
        <Buttons buttons={buttons} />
      </div>
      <p className="text-center text-xs">오감의 회원이 아니신가요?</p>
    </div>
  );
}
