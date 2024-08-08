import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "./modules/events/components/home";
import Login from "./modules/auth/components/login/Login";
import Registration from "./modules/auth/components/registration/Registration";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
