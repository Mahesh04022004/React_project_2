import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Fotter from "./components/Fotter";
import Videos from "./components/Videos";
import Uploads from "./components/Uploads";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


function App() {
  return <Router>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/video" element={<Videos/>}/>
          <Route path="/upload" element={<Uploads/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Fotter></Fotter>
  </Router>
}

export default App;
