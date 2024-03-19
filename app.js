const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const app = express();
const port = 4000;

// Define el intervalo de tiempo en minutos
const intervalo = 60; // Cambia este valor según tus necesidades

cron.schedule(`*/${intervalo} * * * *`, async () => {
    try {
        const response = await axios.get('https://control-vencimientos.onrender.com/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
