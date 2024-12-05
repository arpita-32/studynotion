import './App.css';
import Navbar from "./Components/Navbar";
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
import { useState } from 'react';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      <Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      

      </Routes>
    </div>
  );
}

export default App;
