const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;



app.use(express.json());


app.use('/', routes);


app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    
    res.json({ mensaje: 'Usuario registrado correctamente' });
});

app.post('/inicio-sesion', (req, res) => {
    const { correo, contraseña } = req.body;
    
    res.json({ mensaje: 'Inicio de sesión exitoso' });
});


app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
