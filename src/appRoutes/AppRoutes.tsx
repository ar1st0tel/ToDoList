import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
