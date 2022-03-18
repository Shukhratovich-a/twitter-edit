import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import useTheme from "./Hooks/useTheme";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const [theme] = useTheme();

  return (
    <div className={`app ${theme === "dark" ? "app--dark" : "app--light"}`}>
      <div className="app__inner">
        <Header />

        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
