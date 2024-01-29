import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoardPage from "./pages/admin/DashBoardPage";
import CounterPage from "./pages/admin/CouterPage";
import CashierReportPage from "./pages/admin/CashierReportPage";
import { AppContext } from "./context/AppProvider";

const App = () => {
  const { theme } = useContext(AppContext);
  return (
    <BrowserRouter>
      <main
        className={`max-w-[100%]  p-6 ${theme === "dark" ? `bg-black dark` : `bg-white`} ${theme}`}
      >
        <Routes>
          <Route path="/" element={<DashBoardPage />}></Route>
          <Route path="/counter" element={<CounterPage />}></Route>
          <Route path="/cashier" element={<CashierReportPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
