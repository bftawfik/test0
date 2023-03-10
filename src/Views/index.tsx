import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "Views/SignUpPage/SignUpPage";
import SignInPage from "Views/SignInPage/SignInPage";
import HomePage from "Views/HomePage/HomePage";
import { PAGES_URL_PATHS } from "Constents";
import MainNavigation from "Components/MainNavigation/MainNavigation";

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path={PAGES_URL_PATHS.SIGN_UP} element={<SignUpPage />} />
        <Route path={PAGES_URL_PATHS.SIGN_IN} element={<SignInPage />} />
        <Route path={PAGES_URL_PATHS.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
