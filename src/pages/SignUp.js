import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Signup() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phonenum, setPhonenum] = useState("");

  const navigate = useNavigate();

  const handleNicknameClick = () => {
    navigate("/nickname");
  };

  return (
    <div className="pl-8 pr-8 pt-36">
      <div className="mb-5">
        <Input
          label="아이디"
          inputText={userid}
          setInputText={setUserid}
          placeholder="아이디를 입력하세요."
        />
        <Input
          label="비밀번호"
          inputText={password}
          setInputText={setPassword}
          placeholder="비밀번호를 입력하세요."
        />
        <Input
          label="이름"
          inputText={username}
          setInputText={setUsername}
          placeholder="이름을 입력하세요."
        />
        <Input
          label="전화번호"
          inputText={phonenum}
          setInputText={setPhonenum}
          placeholder="전화번호를 입력하세요."
        />
      </div>
      <div>
        <Button text="회원가입" onClick={handleNicknameClick} />
      </div>
    </div>
  );
}
