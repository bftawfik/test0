import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "Views/SignUpPage/SignUpPage";
import LoginPage from "Views/LoginPage/LoginPage";
import { PAGES_URL_PATHS } from "Constents";
import MainNavigation from "Components/MainNavigation/MainNavigation";

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path={PAGES_URL_PATHS.SIGN_UP} element={<SignUpPage />} />
        <Route path={PAGES_URL_PATHS.SIGN_IN} element={<LoginPage />} />
        <Route path={PAGES_URL_PATHS.HOME} element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
