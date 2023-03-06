import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import DemoScreen from "./Screens/DemoScreen/DemoScreen";
import SignInScreen from "./Screens/SignScreen/SignInScreen";
import MyPageScreen from "./Screens/MyPageScreen/MyPageScreen";
import NotFoundScreen from "./Screens/NotFoundScreen/NotFoundScreen";
import TrialScreen from "./Screens/TrialScreen/TrialScreen";
import IntroductionScreen from "./Screens/IntroductionScreen/IntroductionScreen";
import CatalogScreen from "./Screens/CatalogScreen/CatalogScreen";
import AdministratorSignInScreen from "./Screens/AdministratorSignInScreen/AdministratorSignInScreen";
import TermsScreen from "./Screens/TermsScreen/TermsScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
        <Route path={"/demo"} element={<DemoScreen />} />
        <Route path={"/signin"} element={<SignInScreen />} />
        <Route path={"/mypage"} element={<MyPageScreen />} />
        <Route path={"/introduction"} element={<IntroductionScreen />} />
        <Route path={"/catalog"} element={<CatalogScreen />} />
        <Route
          path={"/administrator"}
          element={<AdministratorSignInScreen />}
        />
        <Route path={"/terms"} element={<TermsScreen />} />
        <Route path={"/demo/:level"} element={<TrialScreen />} />
        <Route path={"*"} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
