import React from 'react'
import './App.css';
import FormData from './Component/FormData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AllData from './Component/AllData';
import { Check } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<FormData/>}/>
        <Route path='/AllData' element={<AllData/>}/>
        <Route path='/Check' element={<Check/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
