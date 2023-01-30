import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import DemoScreen from "./Screens/DemoScreen/DemoScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
        <Route path={"/demo"} element={<DemoScreen />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
