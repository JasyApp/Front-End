import { useState } from "react";
import "./App.css";
import Header from "./lib/Header";
import Body from "./lib/Body";
import { Routes, Route } from "react-router-dom";
import Noticias from "./lib/Noticias";
import Acercade from "./lib/Acercade";
import Proyectos from "./lib/Proyectos";
import Footer from "./lib/Footer";
import Loyer from "./lib/Loyer";
import MesaggeProvider from "./context/MessageContext";
import Form from "./lib/Form";
import DevTeam from "./lib/DevTeam";

function App() {
  return (
    <div className="overflow-x-hidden">
      <MesaggeProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="noticias" element={<Noticias />}></Route>
            <Route path="/" element={<Body />}></Route>
            <Route path="/" element={<Footer />}></Route>
            <Route path="acercade" element={<Acercade />}></Route>
            <Route path="proyectos" element={<Proyectos />}></Route>
            <Route path="categorias" element={<Loyer />}></Route>
            <Route path="añadir" element={<Form />}></Route>
            <Route path="devteam" element={<DevTeam />}></Route>
          </Route>
        </Routes>
      </MesaggeProvider>
    </div>
  );
}

export default App;
