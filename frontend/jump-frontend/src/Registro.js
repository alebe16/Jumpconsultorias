import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
const [nombre, setNombre] = useState('');
const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:5000/registro', { nombre, correo, contraseña });
    console.log(response.data);
    } catch (error) {
    console.error('Error al registrar usuario:', error);
    }
};

return (
    <div class="log-in-form">
        <div class="logo-page"></div>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" /><br />
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo electrónico" /><br />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" /><br />
            <button type="submit">Registrarse</button>
            <a href='/'>Ir a Inicio de Sesión</a>
        </form>
    </div>
  );
}

export default Registro;
