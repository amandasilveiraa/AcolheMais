import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.js';
import { Register } from './pages/register/register.js';
import { GlobalStyle } from './StyledGlobal.js';

export function App() {
  return (
    <>
    
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        
    </BrowserRouter>
    
    </>
  );
}

export default App;