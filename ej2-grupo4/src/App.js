// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Asegúrate de crear este archivo
import Register from './components/register/Register';
import PersonalInfo from './components/register/PersonalInfo';
import ContactInfo from './components/register/ContactInfo';
import Confirmation from './components/register/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
          <Link to="/register">Registrarse</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}>
            {/* Rutas anidadas - se renderizan dentro del <Outlet /> de Register.js */}
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="contact" element={<ContactInfo />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;