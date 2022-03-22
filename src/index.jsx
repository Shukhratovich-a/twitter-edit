import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ThemeProvider } from "./Context/ThemeContext";
import { Provider as LanguageProvider } from "./Context/LanguageContext";
import { Provider as AuthenticationProvider } from "./Context/Authentication";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AuthenticationProvider>
            <App />
          </AuthenticationProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
