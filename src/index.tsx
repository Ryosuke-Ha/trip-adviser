import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/pages/home/Home";
import Result from "./components/pages/result/Result";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
      <Footer />
    </Router>
  </Provider>
);
