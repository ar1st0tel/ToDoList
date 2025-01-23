import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage.tsx";



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
