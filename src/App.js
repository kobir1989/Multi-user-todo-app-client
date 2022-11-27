import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import axios from "axios";


axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
