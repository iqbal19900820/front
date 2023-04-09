import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Forget from "./components/Forget.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/forget" element={<Forget></Forget>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
