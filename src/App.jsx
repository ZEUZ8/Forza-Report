import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoardPage from "./pages/admin/DashBoardPage";
import CounterPage from "./pages/admin/CouterPage";
import CashierReportPage from "./pages/admin/CashierReportPage";
import { AppContext } from "./context/AppProvider";


const setRootStyle = (theme) => {
  const root = document.documentElement;
  root.style.setProperty(
    "--background-color",
    theme === "dark"
      ? "var(--background-color-dark)"
      : "var(--background-color-light)"
  );
};

const App = () => {
  const { theme } = useContext(AppContext);

  useEffect(() => {
    setRootStyle(theme);
  }, [theme]);

  const styles = {
    body: {
      backgroundColor: theme === "dark" ? "black" : "white"
    }
  };

  return (
    <BrowserRouter>
      <main style={styles.body}
        // className={`max-w-[100%]  p-6 ${theme === "dark" ? `bg-black dark` : `bg-white`} ${theme}`}
        className={`max-w-[100%] scrollbar-hide p-6  ${theme}`}
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
