import React, { useState } from 'react';
import axios from 'axios';

function InicioSesion() {
const [correo, setCorreo] = useState('');
const [contraseña, setContraseña] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:5000/inicio-sesion', { correo, contraseña });
    console.log(response.data);
    } catch (error) {
    console.error('Error al iniciar sesión:', error);
    }
};

return (
    <div class="log-in-form">
        <div class="logo-page"></div>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo electrónico" /><br />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" /><br />
            <button type="submit">Iniciar Sesión</button>
            <a href='/registro'>Ir a Registro</a>
        </form>
    </div>
);
}

export default InicioSesion;
