import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './Registro';
import InicioSesion from './InicioSesion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<InicioSesion />} />
      </Routes>
    </Router>
  );
}

export default App;

