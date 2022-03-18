import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Promocoes from "./pages/promocoes/Promocoes.jsx";
import Home from "./pages/home/Home.jsx";

import Cadastro from "./pages/cadastro/Cadastro";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}>
          {" "}
        </Route>
        <Route path="/Promocoes" element={<Promocoes />}>
          {" "}
        </Route>
       
        <Route path="/Cadastro" element={<Cadastro />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
