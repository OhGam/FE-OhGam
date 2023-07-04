import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from "../assets/navbar/calendar.svg";
import { ReactComponent as Home } from "../assets/navbar/home.svg";
import { ReactComponent as Friends } from "../assets/navbar/friends.svg";
import { ReactComponent as Settings } from "../assets/navbar/settings.svg";
import { ReactComponent as OnCalendar } from "../assets/navbar/calendar_black.svg";
import { ReactComponent as OnHome } from "../assets/navbar/home_black.svg";
import { ReactComponent as OnFriends } from "../assets/navbar/friends_black.svg";
import { ReactComponent as OnSettings } from "../assets/navbar/settings_black.svg";

export default function NavBar() {
  const [isMain, setIsMain] = useState(true);
  const [isDiary, setIsDiary] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const navigate = useNavigate();
  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setIsMain(true);
      setIsDiary(false);
      setIsCommunity(false);
      setIsSetting(false);
    } else if (location === "/diary") {
      setIsMain(false);
      setIsDiary(true);
      setIsCommunity(false);
      setIsSetting(false);
    } else if (location === "/community") {
      setIsMain(false);
      setIsDiary(false);
      setIsCommunity(true);
      setIsSetting(false);
    } else if (location === "/setting") {
      setIsMain(false);
      setIsDiary(false);
      setIsCommunity(false);
      setIsSetting(true);
    } else if (location === "/detail" || location === "/create" || location === "/login" || location === "signup") {
      setIsMain(false);
      setIsDiary(false);
      setIsCommunity(false);
      setIsSetting(false);
    }
  }, [location]);

  return (
    <div className="fixed bottom-0 w-[390px] h-24 px-8 bg-st-gray-03 flex justify-between items-center">
      <button className="flex flex-col justify-center items-center" onClick={() => navigate("/")}>
        {isMain ? <OnHome /> : <Home />}
        <p className="mt-1 text-xs text-st-gray-06">메인</p>
      </button>
      <button className="flex flex-col justify-center items-center" onClick={() => navigate("/diary")}>
        {isDiary ? <OnCalendar /> : <Calendar />}
        <p className="mt-1 text-xs text-st-gray-06">캘린더</p>
      </button>
      <button className="flex flex-col justify-center items-center" onClick={() => navigate("/community")}>
        {isCommunity ? <OnFriends /> : <Friends />}
        <p className="mt-1 text-xs text-st-gray-06">커뮤니티</p>
      </button>
      <button className="flex flex-col justify-center items-center" onClick={() => navigate("/setting")}>
        {isSetting ? <OnSettings /> : <Settings />}
        <p className="mt-1 text-xs text-st-gray-06">설정</p>
      </button>
    </div>
  );
}
