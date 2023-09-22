import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// add redux toolkit
import { store } from "./app/store";
import { Provider } from "react-redux";
//add router to full applcation
import { BrowserRouter } from "react-router-dom";
// add loading Skeleton
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// add bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// add multi langusch
/* import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import translationEN from "./locales/en.json";
import translationAR from "./locales/ar.json"; */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <I18nextProvider i18n={i18n}> */}
    <BrowserRouter>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Provider store={store}>
          <App />
        </Provider>
      </SkeletonTheme>
    </BrowserRouter>
    {/*   </I18nextProvider> */}
  </React.StrictMode>
);
