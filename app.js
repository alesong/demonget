const express = require('express');
const axios = require('axios');
const moment = require('moment-timezone');
const app = express();
const port = 4000;

// Define el intervalo de tiempo en segundos
const intervalo = 4 * 60 * 1000; // 4 minutos

setInterval(async () => {
    try {
        //const response = await axios.get('http://localhost:3000/ping');
        const response = await axios.get('https://control-vencimientos.onrender.com/ping');
        console.log(`Petición realizada a las ${moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')}`);
        console.log(response.data);
    } catch (error) {
        console.log(`Error al realizar la petición a las ${moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')}`);
        console.error(error);
    }
}, intervalo);

app.get('/ping', function (req, res) {
    res.send('pong');
   })

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
