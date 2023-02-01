import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import DemoScreen from "./Screens/DemoScreen/DemoScreen";
import SignInScreen from "./Screens/SignInScreen/SignInScreen";
import MyPageScreen from "./Screens/MyPageScreen/MyPageScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
        <Route path={"/demo"} element={<DemoScreen />} />
        <Route path={"/signin"} element={<SignInScreen />} />
        <Route path={"/mypage"} element={<MyPageScreen />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
