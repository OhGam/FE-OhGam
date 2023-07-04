import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import Diary from "../pages/Diary";
import Community from "../pages/Community";
import Setting from "../pages/Setting";
import Detail from "../pages/Detail";
import Create from "../pages/Create";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/community" element={<Community />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
