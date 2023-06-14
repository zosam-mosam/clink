import "./App.css";
import React, { useState } from "react";
import Index from "./components/Index";
import Login from "./components/Login";
import Join from "./components/Join";
import FindIdPwd from "./components/FindIdPwd";

function App() {
  return (
    <>
      <Index>
        <Login />
      </Index>
      <Join />
      <FindIdPwd />
    </>
  );
}

export default App;
