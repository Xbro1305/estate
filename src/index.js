import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/presentation/App";
import { NotFound } from "./pages/404/404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/presentation/:id" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
