import { useState } from 'react'
import './App.css'
import LandingPage from "./pages/landingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/signupPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import VdoConf from './pages/vdoConf.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/auth/register" element={<Signup/>} />
        <Route path="/auth/login" element={<LoginPage/>} />
        <Route path="/:url" element={<VdoConf/>} />
      </Routes> 
  );
}

export default App
