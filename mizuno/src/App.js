import React from 'react';
import './App.css';
import Main from './Components/Main';
import './Components/Main.css'
import { Routes, Route } from 'react-router-dom';
import { Marvel } from './Components/Marvel';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/:id' element={<Marvel />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
