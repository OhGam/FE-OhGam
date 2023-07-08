import { useState } from "react";
import Input from "../components/Input";

export default function Login() {
  const [nickname, setNickname] = useState("");

  const handleNickname = () => {
    // Handle Nickname logic here
    console.log("Nickname:", nickname);
  };

  return (
    <div className="pl-8 pr-8 pt-60">
      <Input
        label="닉네임"
        inputText={nickname}
        setInputText={setNickname}
        placeholder="닉네임를 입력하세요."
      />
      <div className="text-right">
        <a href="Main" className="inline-block rounded-full border px-5 py-0.5">
          <button className="text-xs" onClick={handleNickname}>
            완료
          </button>
        </a>
      </div>
    </div>
  );
}
