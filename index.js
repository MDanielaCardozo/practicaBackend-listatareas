import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database'
//const express = require('express');

//instancia de express
const app = express();

//queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

//quiero que mi backend escuche el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Mi backend está en el puerto ${app.get('port')}`)
})

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cargar un archivo estatico
app.use(express.static('./public'));

//rutas
app.get('/', (req, res)=>{
    res.send('primera peticion get')
})

app.get('/prueba', (req, res)=>{
    res.send('segunda peticion get')
})