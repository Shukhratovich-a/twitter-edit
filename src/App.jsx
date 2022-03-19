import React from "react";
import { Route, Routes } from "react-router-dom";

import AppInner from "./Components/AppInner/AppInner";
import LoginPage from "./Pages/LoginPage/LoginPage";
import useTheme from "./Hooks/useTheme";

import "./App.scss";

function App() {
  const [theme] = useTheme();

  return (
    <div className={`app ${theme === "dark" ? "app--dark" : "app--light"}`}>
      <Routes>
        <Route path="/*" element={<AppInner />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
