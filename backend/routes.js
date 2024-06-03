
const express = require('express');
const router = express.Router();

const Usuario = require('./models'); 


router.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    res.json({ mensaje: 'Usuario registrado correctamente' });
});

router.post('/inicio-sesion', (req, res) => {
    const { correo, contraseña } = req.body;
    
    res.json({ mensaje: 'Inicio de sesión exitoso' });
});


module.exports = router;
