import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.js';
import { Register } from './pages/register/register.js';
import { GlobalStyle } from './StyledGlobal.js';
import Estoque from './pages/estoque/Estoque.js';

export function App() {
  return (
    <>
    
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/estoque' element={<Estoque />} />
        </Routes>
        
    </BrowserRouter>
    
    </>
  );
}

export default App;